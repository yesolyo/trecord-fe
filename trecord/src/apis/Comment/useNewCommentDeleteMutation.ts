import { useMutation, useQueryClient } from '@tanstack/react-query';
import { http } from '../_http';
import { DeleteNewCommentResponse } from '@/types/comment';
import COMMENT_API_KEY from './constants';

interface deleteNewCommentProps {
  commentId: number;
}
interface Props {
  recordId: string | undefined;
  commentId: number;
}

const deleteNewComment = async ({
  commentId,
}: deleteNewCommentProps): Promise<deleteNewCommentProps> => {
  const url = `/api/v1/comments/${commentId}`;
  const response: DeleteNewCommentResponse = await http.delete(url);

  return response;
};

const useNewCommentDeleteMutation = ({ recordId, commentId }: Props) => {
  const queryClient = useQueryClient();
  return useMutation(deleteNewComment, {
    onSuccess: () => {
      queryClient
        .invalidateQueries([COMMENT_API_KEY.NEW_COMMENT, { recordId }])
        .then(() => {
          queryClient.removeQueries([
            COMMENT_API_KEY.REPLY_COMMENT,
            { commentId },
          ]);
          queryClient.invalidateQueries([COMMENT_API_KEY.REPLY_COMMENT]);
        });
    },

    /** @TODO 나중에 error boundary 추가 */
    onError: (e) => console.log(e),
  });
};

export default useNewCommentDeleteMutation;
