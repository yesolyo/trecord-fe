import { useMutation } from '@tanstack/react-query';
import { http } from '../_http';
import { PutNewCommentResponse } from '@/types/comment';
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
  return useMutation(modifyNewComment, {
    /** @TODO 나중에 error boundary 추가 */
    onError: (e) => console.log(e),
  });
};

export default useModifyNewComment;
