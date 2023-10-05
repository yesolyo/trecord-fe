import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { http } from '../_http';
import { GetMyPageInviteResponse } from '@/types/comment';
import MYPAGE_API_KEY from './constants';
interface Props {
  pageCount: number;
}
export const getMyPageInvite = async ({
  pageCount,
}: Props): Promise<GetMyPageInviteResponse> => {
  const url = `/api/v1/users/invited?page=0&size=${pageCount}`;
  const response: GetMyPageInviteResponse = await http.get(url);
  return response;
};

const useGetMyPageInvite = ({
  pageCount,
}: Props): UseQueryResult<GetMyPageInviteResponse> => {
  return useQuery(
    [MYPAGE_API_KEY.INVITE, { pageCount }],
    () => getMyPageInvite({ pageCount }),
    {
      suspense: true,
    },
  );
};

export default useGetMyPageInvite;
