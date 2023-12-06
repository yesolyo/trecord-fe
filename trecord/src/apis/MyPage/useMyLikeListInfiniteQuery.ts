import { useInfiniteQuery } from '@tanstack/react-query';
import MYPAGE_API_KEY from './constants';
import { GetMyPageLike } from '@/types/mypage';
import { Page } from '@/types';
import { http } from '../_http';

interface Props {
  page: number;
}
export const getMyLikeList = async ({
  page,
}: Props): Promise<Page<GetMyPageLike>> => {
  const url = `/api/v1/users/likes?page=${page}&size=5`;
  const response: Page<GetMyPageLike> = await http.get(url);
  return response;
};

const useMyLikeListInfiniteQuery = () => {
  return useInfiniteQuery({
    queryKey: [MYPAGE_API_KEY.LIKE],
    queryFn: async ({ pageParam = 0 }) =>
      await getMyLikeList({ page: pageParam }),
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

export default useMyLikeListInfiniteQuery;
