import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { http } from '../_http';
import MYPAGE_API_KEY from './constants';
import { Page } from '@/types';
import { GetMyPageLike } from '@/types/mypage';
interface Props {
  page: number;
}
export const getMyPageLike = async ({
  page,
}: Props): Promise<Page<GetMyPageLike>> => {
  const url = `/api/v1/users/likes?page=${page}&size=5`;
  const response: Page<GetMyPageLike> = await http.get(url);
  return response;
};

const useMyPageLikeQuery = ({
  page,
}: Props): UseQueryResult<Page<GetMyPageLike>> => {
  return useQuery(
    [MYPAGE_API_KEY.LIKE, { page }],
    () => getMyPageLike({ page }),
    {
      suspense: true,
    },
  );
};

export default useMyPageLikeQuery;
