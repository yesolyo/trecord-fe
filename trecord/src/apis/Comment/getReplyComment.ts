import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { http } from '../_http';
import { GetReplyComment } from '@/types/comment';
import COMMENT_API_KEY from './constants';
import { Page } from '@/types';

interface Props {
  commentId: number;
  pageCount: number;
}
export const getReplyComment = async ({
  commentId,
  pageCount,
}: Props): Promise<Page<GetReplyComment>> => {
  const url = `/api/v1/comments/${commentId}/replies?page=0&size=${pageCount}`;
  const response: Page<GetReplyComment> = await http.get(url);
  return response;
};

const useGetReplyComment = ({
  commentId,
  pageCount,
}: Props): UseQueryResult<Page<GetReplyComment>> => {
  return useQuery(
    [COMMENT_API_KEY.REPLY_COMMENT, commentId],
    () => getReplyComment({ commentId, pageCount }),
    { enabled: !!commentId },
  );
};

export default useGetReplyComment;
