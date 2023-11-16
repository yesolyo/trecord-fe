import { useMutation, useQueryClient } from '@tanstack/react-query';
import { http } from '../_http';
import { PutNewCommentResponse } from '@/types/comment';
import COMMENT_API_KEY from './constants';
interface putCommentProps {
  commentId: number;
  content: string;
}
export const modifyNewComment = async ({
  commentId,
  content,
}: putCommentProps): Promise<putCommentProps> => {
  const url = `/api/v1/comments/${commentId}`;
  const response: PutNewCommentResponse = await http.put(url, {
    content,
  });

  return response;
};

const useModifyNewComment = () => {
  const queryClient = useQueryClient();
  return useMutation(modifyNewComment, {
    onSuccess: () => {
      queryClient.invalidateQueries([COMMENT_API_KEY.NEW_COMMENT]);
      queryClient.invalidateQueries([COMMENT_API_KEY.REPLY_COMMENT]);
    },
    /** @TODO 나중에 error boundary 추가 */
    onError: (e) => console.log(e),
  });
};

export default useModifyNewComment;
