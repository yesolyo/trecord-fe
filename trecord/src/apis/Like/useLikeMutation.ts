import { useMutation } from '@tanstack/react-query';
import { http } from '../_http';

export interface postLikeProps {
  recordId: number;
}

export interface postLikeResponse {
  liked: boolean;
}
const postLike = async ({
  recordId,
}: postLikeProps): Promise<postLikeResponse> => {
  const url = `/api/v1/records/${recordId}/like`;
  const response: postLikeResponse = await http.post(url);

  return response;
};

const useLikeMutation = () => {
  return useMutation(postLike, {
    /** @TODO 나중에 error boundary 추가 */
    onError: (e) => console.log(e),
  });
};

export default useLikeMutation;
