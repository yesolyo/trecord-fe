import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { http } from '../_http';
import { GetMyPageLikeProps, GetMyPageLikeRespose } from '@/types/comment';
import MYPAGE_API_KEY from './constants';
import { Page } from '@/types';
interface Props {
  page: number;
}
export const getMyPageLike = async ({
  page,
}: Props): Promise<Page<GetMyPageLikeProps>> => {
  const url = `/api/v1/users/likes?page=${page}&size=5`;
  const response: Page<GetMyPageLikeProps> = await http.get(url);
  return response;
};

const useGetMyPageLike = ({
  page,
}: Props): UseQueryResult<Page<GetMyPageLikeProps>> => {
  return useQuery(
    [MYPAGE_API_KEY.LIKE, { page }],
    () => getMyPageLike({ page }),
    {
      suspense: true,
    },
  );
};

export default useGetMyPageLike;
