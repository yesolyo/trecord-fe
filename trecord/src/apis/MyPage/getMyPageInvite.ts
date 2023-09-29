import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { http } from '../_http';
import { GetMyPageInviteResponse } from '@/types/comment';
import MYPAGE_API_KEY from './constants';

export const getMyPageInvite = async (): Promise<GetMyPageInviteResponse> => {
  const url = `/api/v1/users/invited`;
  const response: GetMyPageInviteResponse = await http.get(url);
  return response;
};

const useGetMyPageInvite = (): UseQueryResult<GetMyPageInviteResponse> => {
  return useQuery([MYPAGE_API_KEY.INVITE], () => getMyPageInvite(), {
    suspense: true,
  });
};

export default useGetMyPageInvite;
