import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { http } from '../_http';
import MYPAGE_API_KEY from './constants';
import { Page } from '@/types';
import { GetInviteFeedList } from '@/types/mypage';
interface Props {
  page: number;
}
export const getInviteFeedList = async ({
  page,
}: Props): Promise<Page<GetInviteFeedList>> => {
  const url = `/api/v1/users/invited?page=${page}&size=0`;
  const response: Page<GetInviteFeedList> = await http.get(url);
  return response;
};

const useInviteFeedListQuery = ({
  page,
}: Props): UseQueryResult<Page<GetInviteFeedList>> => {
  return useQuery(
    [MYPAGE_API_KEY.INVITE, { page }],
    () => getInviteFeedList({ page }),
    {
      suspense: true,
    },
  );
};

export default useInviteFeedListQuery;
