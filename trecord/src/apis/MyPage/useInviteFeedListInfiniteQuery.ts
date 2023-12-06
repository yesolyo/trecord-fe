import { useInfiniteQuery } from '@tanstack/react-query';
import { getInviteFeedList } from './useInviteFeedListQuery';
import MYPAGE_API_KEY from './constants';

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
