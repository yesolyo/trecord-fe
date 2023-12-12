import { useInfiniteQuery } from '@tanstack/react-query';
import MYPAGE_API_KEY from './constants';
import { http } from '../_http';
import { Page } from '@/types';
import { GetInviteFeedList } from '@/types/mypage';
interface Props {
  page: number;
}
const getInviteFeedList = async ({
  page,
}: Props): Promise<Page<GetInviteFeedList>> => {
  const url = `/api/v1/users/invited?page=${page}&size=5`;
  const response: Page<GetInviteFeedList> = await http.get(url);
  return response;
};
export const useInviteFeedListInfiniteQuery = () => {
  return useInfiniteQuery({
    queryKey: [MYPAGE_API_KEY.INVITE],
    queryFn: async ({ pageParam = 0 }) =>
      await getInviteFeedList({ page: pageParam }),
    getNextPageParam: (lastPage, allPages) => {
      const calculateNextPageParam = () => {
        if (lastPage.last) return undefined;
        else {
          if (allPages.length === 1) {
            return allPages.length;
          } else {
            return allPages.length + 1;
          }
        }
      };
      const nextPageParam = calculateNextPageParam();
      return nextPageParam;
    },
  });
};

export default useInviteFeedListInfiniteQuery;
