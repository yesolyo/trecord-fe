import { useInfiniteQuery } from '@tanstack/react-query';

import FEED_API_KEY from './constants';
import { getFeeds } from './useFeedQuery';
const useFeedInfiniteQuery = () => {
  return useInfiniteQuery({
    queryKey: [FEED_API_KEY.FEEDS],
    queryFn: async ({ pageParam = 0 }) => await getFeeds({ page: pageParam }),
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

export default useFeedInfiniteQuery;
