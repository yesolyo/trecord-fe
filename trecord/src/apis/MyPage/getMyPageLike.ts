import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { http } from '../_http';
import { GetMyPageLikeRespose } from '@/types/comment';
import MYPAGE_API_KEY from './constants';

export const getMyPageLike = async (): Promise<GetMyPageLikeRespose> => {
  const url = `/api/v1/users/likes`;
  const response: GetMyPageLikeRespose = await http.get(url);
  return response;
};

const useGetMyPageLike = (): UseQueryResult<GetMyPageLikeRespose> => {
  return useQuery([MYPAGE_API_KEY.LIKE], () => getMyPageLike(), {
    suspense: true,
  });
};

export default useGetMyPageLike;
