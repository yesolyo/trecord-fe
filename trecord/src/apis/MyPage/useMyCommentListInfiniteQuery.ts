import { useInfiniteQuery } from '@tanstack/react-query';
import MYPAGE_API_KEY from './constants';
import { http } from '../_http';
import { Page } from '@/types';
import { GetMypageComment } from '@/types/mypage';
interface Props {
  page: number;
}
export const getMypageComment = async ({
  page,
}: Props): Promise<Page<GetMypageComment>> => {
  const url = `/api/v1/users/comments?page=${page}&size=5`;
  const response: Page<GetMypageComment> = await http.authGet(url);
  return response;
};
export const useMyCommentListInfiniteQuery = () => {
  return useInfiniteQuery({
    queryKey: [MYPAGE_API_KEY.COMMENT],
    queryFn: async ({ pageParam = 0 }) =>
      await getMypageComment({ page: pageParam }),
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

export default useMyCommentListInfiniteQuery;
