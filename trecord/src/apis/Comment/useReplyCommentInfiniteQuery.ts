import { useInfiniteQuery } from '@tanstack/react-query';
import { http } from '../_http';
import { GetReplyComment } from '@/types/comment';
import COMMENT_API_KEY from './constants';
import { Page } from '@/types';

interface getReplyCommentProps {
  commentId: number;
  page: number;
}
interface Props {
  commentId: number;
}
const getReplyComment = async ({
  commentId,
  page,
}: getReplyCommentProps): Promise<Page<GetReplyComment>> => {
  const url = `/api/v1/comments/${commentId}/replies?page=${page}&size=5`;
  const response: Page<GetReplyComment> = await http.get(url);
  return response;
};

const useReplyCommentInfiniteQuery = ({ commentId }: Props) => {
  return useInfiniteQuery({
    queryKey: [COMMENT_API_KEY.REPLY_COMMENT, { commentId }],
    queryFn: async ({ pageParam = 0 }) =>
      await getReplyComment({ page: pageParam, commentId }),
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
export default useReplyCommentInfiniteQuery;
