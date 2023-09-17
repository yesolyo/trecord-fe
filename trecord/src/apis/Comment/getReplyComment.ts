import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { http } from '../_http';
import { GetReplyCommentProps } from '@/types/comment';
import COMMENT_API_KEY from './constants';

interface Props {
  commentId: number;
}
export const getReplyComment = async ({
  commentId,
}: Props): Promise<GetReplyCommentProps[]> => {
  const url = `/api/v1/comments/${commentId}/replies`;
  const response: { content: GetReplyCommentProps[] } = await http.get(url);
  return response.content;
};

const useGetReplyComment = ({
  commentId,
}: Props): UseQueryResult<GetReplyCommentProps[]> => {
  return useQuery(
    [COMMENT_API_KEY.REPLY_COMMENT, { comment_id: commentId }],
    () => getReplyComment({ commentId }),
    {
      suspense: true,
    },
  );
};

export default useGetReplyComment;
