import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { http } from '../_http';
import { GetReplyComment } from '@/types/comment';
import COMMENT_API_KEY from './constants';
import { Page } from '@/types';

interface Props {
  commentId: number;
}
export const getReplyComment = async ({
  commentId,
}: Props): Promise<Page<GetReplyComment>> => {
  const url = `/api/v1/comments/${commentId}/replies`;
  const response: Page<GetReplyComment> = await http.get(url);
  return response;
};

const useReplyCommentQuery = ({
  commentId,
}: Props): UseQueryResult<Page<GetReplyComment>> => {
  return useQuery(
    [COMMENT_API_KEY.REPLY_COMMENT, commentId],
    () => getReplyComment({ commentId }),
    { enabled: !!commentId, suspense: true },
  );
};

export default useReplyCommentQuery;
