import { useMutation } from '@tanstack/react-query';
import { http } from '../_http';
import { DeleteNewCommentResponse } from '@/types/comment';

interface deleteCommentProps {
  commentId: number;
}
const deleteNewComment = async ({
  commentId,
}: deleteCommentProps): Promise<deleteCommentProps> => {
  const url = `/api/v1/comments/${commentId}`;
  const response: DeleteNewCommentResponse = await http.delete(url);

  return response;
};

const useDeleteNewComment = () => {
  return useMutation(deleteNewComment, {
    /** @TODO 나중에 error boundary 추가 */
    onError: (e) => console.log(e),
  });
};

export default useDeleteNewComment;
