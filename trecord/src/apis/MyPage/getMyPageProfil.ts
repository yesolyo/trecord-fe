import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { http } from '../_http';
import MYPAGE_API_KEY from './constants';
import { MyPageUser } from '@/types/user';

export const getMyPageProfile = async (): Promise<MyPageUser> => {
  const url = `api/v1/users`;
  const response: MyPageUser = await http.get(url);
  return response;
};

const useGetMyPageProfile = (): UseQueryResult<MyPageUser> => {
  return useQuery([MYPAGE_API_KEY.USER], () => getMyPageProfile(), {
    suspense: true,
  });
};

export default useGetMyPageProfile;
