import { useMutation, useQueryClient } from '@tanstack/react-query';

import { http } from '../_http';
import MYPAGE_API_KEY from './constants';

interface Props {
  id: number;
}

const deleteMyPageInvite = async ({ id }: Props) => {
  const url = `/api/v1/feeds/${id}/contributors/leave`;
  const response = await http.delete(url);

  return response;
};

const useInviteMyPageDeleteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteMyPageInvite, {
    onSuccess: () => {
      queryClient.invalidateQueries([MYPAGE_API_KEY.INVITE]);
    },
    /** @TODO 나중에 error boundary 추가 */
    onError: (e) => console.log(e),
  });
};

export default useInviteMyPageDeleteMutation;
