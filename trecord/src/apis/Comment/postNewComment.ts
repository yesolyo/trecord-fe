import { useMutation } from '@tanstack/react-query';
import { http } from '../_http';
import { GetNewCommentResponse, PostNewCommentResponse } from '@/types/comment';

interface postNewCommentProps {
  recordId: number;
  content: string;
}

interface getCommentProps {
  recordId: number;
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

export const getNewComment = async ({
  recordId,
}: getCommentProps): Promise<GetNewCommentResponse> => {
  const url = `/api/v1/records/${recordId}/comments`;
  const response: GetNewCommentResponse = await http.get(url);
  return response;
};

export const usePostNewComment = () => {
  return useMutation(postNewComment, {
    /** @TODO 나중에 error boundary 추가 */
    onError: (e) => console.log(e),
  });
};

export const useGetNewComment = () => {};
