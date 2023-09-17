import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { http } from '../_http';
import { GetReplyCommentResponse } from '@/types/comment';
import COMMENT_API_KEY from './constants';

interface Props {
  commentId: number;
}
export const getReplyComment = async ({
  commentId,
}: Props): Promise<GetReplyCommentResponse> => {
  const url = `/api/v1/comments/${commentId}/replies`;
  const response: GetReplyCommentResponse = await http.get(url);
  return response;
};

const useGetReplyComment = ({
  commentId,
}: Props): UseQueryResult<GetReplyCommentResponse> => {
  return useQuery(
    [COMMENT_API_KEY.REPLY_COMMENT, { comment_id: commentId }],
    () => getReplyComment({ commentId }),
    {
      suspense: true,
    },
  );
};

export default useGetReplyComment;
