import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { http } from '../_http';
import { GetAllAlarmResponse } from '@/types/alarm';
import ALARM_API_KEY from './constants';
import { GetNewCommentResponse } from '@/types/comment';
import COMMENT_API_KEY from './constants';

interface Props {
  recordId: number;
}
export const getNewComment = async ({
  recordId,
}: Props): Promise<GetNewCommentResponse> => {
  const url = `/api/v1/records/${recordId}/comments`;
  const response: GetNewCommentResponse = await http.get(url);
  return response;
};

const useGetNewComment = ({
  recordId,
}: Props): UseQueryResult<GetNewCommentResponse> => {
  return useQuery(
    [COMMENT_API_KEY.NEW_COMMENT, { record_id: recordId }],
    () => getNewComment({ recordId }),
    {
      suspense: true,
    },
  );
};

export default useGetNewComment;
