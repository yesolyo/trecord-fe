import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { http } from '../_http';
import MYPAGE_API_KEY from './constants';
import { Page } from '@/types';
import { GetMyPageInvite } from '@/types/mypage';
interface Props {
  pageCount: number;
}
export const getMyPageInvite = async ({
  pageCount,
}: Props): Promise<Page<GetMyPageInvite>> => {
  const url = `/api/v1/users/invited?page=0&size=${pageCount}`;
  const response: Page<GetMyPageInvite> = await http.get(url);
  return response;
};

const useInviteMyPageQuery = ({
  pageCount,
}: Props): UseQueryResult<Page<GetMyPageInvite>> => {
  return useQuery(
    [MYPAGE_API_KEY.INVITE, { pageCount }],
    () => getMyPageInvite({ pageCount }),
    {
      suspense: true,
    },
  );
};

export default useInviteMyPageQuery;
