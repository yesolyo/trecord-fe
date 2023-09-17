import { useMutation } from '@tanstack/react-query';
import { http } from '../_http';
import {
  DeleteNewCommentResponse,
  PostNewCommentResponse,
  PutNewCommentResponse,
} from '@/types/comment';

interface postNewCommentProps {
  recordId: number;
  content: string;
}

// interface getCommentProps {
//   recordId: number;
// }

interface putCommentProps {
  commentId: number;
  content: string;
}

interface deleteCommentProps {
  commentId: number;
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

// export const getNewComment = async ({
//   recordId,
// }: getCommentProps): Promise<GetNewCommentResponse> => {
//   const url = `/api/v1/records/${recordId}/comments`;
//   const response: GetNewCommentResponse = await http.get(url);
//   return response;
// };

export const putNewComment = async ({
  commentId,
  content,
}: putCommentProps): Promise<putCommentProps> => {
  const url = `/api/v1/comments/${commentId}`;
  const response: PutNewCommentResponse = await http.put(url, {
    content,
  });

  return response;
};

export const deleteNewComment = async ({
  commentId,
}: deleteCommentProps): Promise<deleteCommentProps> => {
  const url = `/api/v1/comments/${commentId}`;
  const response: DeleteNewCommentResponse = await http.delete(url);

  return response;
};

export const usePostNewComment = () => {
  return useMutation(postNewComment, {
    /** @TODO 나중에 error boundary 추가 */
    onError: (e) => console.log(e),
  });
};

export const usePutNewComment = () => {
  return useMutation(putNewComment, {
    /** @TODO 나중에 error boundary 추가 */
    onError: (e) => console.log(e),
  });
};

export const useDeleteNewComment = () => {
  return useMutation(deleteNewComment, {
    /** @TODO 나중에 error boundary 추가 */
    onError: (e) => console.log(e),
  });
};
