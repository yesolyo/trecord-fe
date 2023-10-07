import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { http } from '../_http';
import { GetMyPageLikeRespose } from '@/types/comment';
import MYPAGE_API_KEY from './constants';
interface Props {
  pageCount: number;
}
export const getMyPageLike = async ({
  pageCount,
}: Props): Promise<GetMyPageLikeRespose> => {
  const url = `/api/v1/users/likes?page=0&size=${pageCount}`;
  const response: GetMyPageLikeRespose = await http.get(url);
  return response;
};

const useGetMyPageLike = ({
  pageCount,
}: Props): UseQueryResult<GetMyPageLikeRespose> => {
  return useQuery(
    [MYPAGE_API_KEY.LIKE, { pageCount }],
    () => getMyPageLike({ pageCount }),
    {
      suspense: true,
    },
  );
};

export default useGetMyPageLike;
