import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { http } from '../_http';
import { GetMyPageInviteListProps } from '@/types/comment';
import MYPAGE_API_KEY from './constants';
interface Props {
  pageCount: number;
}
export const getMyPageInvite = async ({
  pageCount,
}: Props): Promise<GetMyPageInviteListProps> => {
  const url = `/api/v1/users/invited?page=0&size=${pageCount}`;
  const response: GetMyPageInviteListProps = await http.get(url);
  return response;
};

const useGetMyPageInvite = ({
  pageCount,
}: Props): UseQueryResult<GetMyPageInviteListProps> => {
  return useQuery(
    [MYPAGE_API_KEY.INVITE, { pageCount }],
    () => getMyPageInvite({ pageCount }),
    {
      suspense: true,
    },
  );
};

export default useGetMyPageInvite;
