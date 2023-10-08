import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { http } from '../_http';
import { GetReplyCommentProps } from '@/types/comment';
import COMMENT_API_KEY from './constants';
import { Page } from '@/types';

interface Props {
  commentId: number;
  pageCount: number;
}
export const getReplyComment = async ({
  commentId,
  pageCount,
}: Props): Promise<Page<GetReplyCommentProps>> => {
  const url = `/api/v1/comments/${commentId}/replies?page=0&size=${pageCount}`;
  const response: Page<GetReplyCommentProps> = await http.get(url);
  return response;
};

const useGetReplyComment = ({
  commentId,
  pageCount,
}: Props): UseQueryResult<Page<GetReplyCommentProps>> => {
  return useQuery(
    [
      COMMENT_API_KEY.REPLY_COMMENT,
      { comment_id: commentId, page_count: pageCount },
    ],
    () => getReplyComment({ commentId, pageCount }),
    {
      suspense: true,
    },
  );
};

export default useGetReplyComment;
