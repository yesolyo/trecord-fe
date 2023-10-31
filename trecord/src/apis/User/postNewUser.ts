import { useMutation, useQueryClient } from '@tanstack/react-query';
import { http } from '../_http';
import { newUser } from '@/types/user';
import USER_API_KEY from './constants';

export interface newUserProps {
  nickname: string;
  imageUrl: string | undefined;
  introduction: string;
}

export const postNewUser = async ({
  nickname,
  imageUrl,
  introduction,
}: newUserProps): Promise<newUser> => {
  const url = `/api/v1/users`;
  const response: newUser = await http.post(url, {
    nickname,
    imageUrl,
    introduction,
  });

  return response;
};

const usePostNewUser = () => {
  const queryClient = useQueryClient();
  return useMutation(postNewUser, {
    onSuccess: () => {
      queryClient.invalidateQueries([USER_API_KEY.USER]);
    },
    /** @TODO 나중에 error boundary 추가 */
    onError: (e) => console.log(e),
  });
};
export default usePostNewUser;
