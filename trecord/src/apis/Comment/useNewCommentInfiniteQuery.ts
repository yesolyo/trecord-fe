import { useInfiniteQuery } from '@tanstack/react-query';
import { http } from '../_http';
import { GetComment } from '@/types/comment';
import COMMENT_API_KEY from './constants';
import { Page } from '@/types';

interface getNewCommentProps {
  recordId: number;
  page: number;
}

interface Props {
  recordId: number;
}

const getNewComment = async ({
  recordId,
  page,
}: getNewCommentProps): Promise<Page<GetComment>> => {
  const url = `/api/v1/records/${recordId}/comments?page=${page}&size=5`;
  const response: Page<GetComment> = await http.get(url);
  return response;
};

const useNewCommentInfiniteQuery = ({ recordId }: Props) => {
  return useInfiniteQuery({
    queryKey: [COMMENT_API_KEY.NEW_COMMENT],
    queryFn: async ({ pageParam = 0 }) =>
      await getNewComment({ page: pageParam, recordId }),
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

export default useNewCommentInfiniteQuery;
