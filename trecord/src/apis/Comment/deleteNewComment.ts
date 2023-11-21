import { useMutation, useQueryClient } from '@tanstack/react-query';
import { http } from '../_http';
import { DeleteNewCommentResponse } from '@/types/comment';
import COMMENT_API_KEY from './constants';

interface Props {
  commentId: number;
}
const deleteNewComment = async ({ commentId }: Props): Promise<Props> => {
  const url = `/api/v1/comments/${commentId}`;
  const response: DeleteNewCommentResponse = await http.delete(url);

  return response;
};

const useDeleteNewComment = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteNewComment, {
    onSuccess: () => {
      queryClient.invalidateQueries([COMMENT_API_KEY.NEW_COMMENT]).then(() => {
        queryClient.removeQueries([COMMENT_API_KEY.REPLY_COMMENT]);
      });
    },

    /** @TODO 나중에 error boundary 추가 */
    onError: (e) => console.log(e),
  });
};

export default useDeleteNewComment;
