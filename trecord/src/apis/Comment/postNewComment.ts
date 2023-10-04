import { useMutation } from '@tanstack/react-query';
import { http } from '../_http';
import { PostNewCommentResponse } from '@/types/comment';

interface postNewCommentProps {
  recordId: number;
  content: string;
}

export const postNewComment = async ({
  recordId,
  content,
}: postNewCommentProps): Promise<postNewCommentProps> => {
  const url = `/api/v1/comments`;
  const response: PostNewCommentResponse = await http.post(url, {
    recordId,
    content,
  });

  return response;
};

const usePostNewComment = () => {
  return useMutation(postNewComment, {
    /** @TODO 나중에 error boundary 추가 */
    onError: (e) => console.log(e),
  });
};
export default usePostNewComment;
