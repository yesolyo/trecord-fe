import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { http } from '../_http';
import { GetNewCommentResponse } from '@/types/comment';
import COMMENT_API_KEY from './constants';

interface Props {
  recordId: number;
  page: number;
}
export const getNewComment = async ({
  recordId,
  page,
}: Props): Promise<GetNewCommentResponse> => {
  const url = `/api/v1/records/${recordId}/comments?page=0&size=${page}`;
  const response: GetNewCommentResponse = await http.get(url);
  return response;
};

const useGetNewComment = ({
  recordId,
  page,
}: Props): UseQueryResult<GetNewCommentResponse> => {
  return useQuery(
    [COMMENT_API_KEY.NEW_COMMENT, { record_id: recordId, page: page }],
    () => getNewComment({ recordId, page }),
    {
      suspense: true,
    },
  );
};

export default useGetNewComment;
