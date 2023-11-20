import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { http } from '../_http';
import { GetComment } from '@/types/comment';
import COMMENT_API_KEY from './constants';
import { Page } from '@/types';

interface Props {
  recordId: number;
}
export const getNewComment = async ({
  recordId,
}: Props): Promise<Page<GetComment>> => {
  const url = `/api/v1/records/${recordId}/comments`;
  const response: Page<GetComment> = await http.get(url);
  return response;
};

const useGetNewComment = ({
  recordId,
}: Props): UseQueryResult<Page<GetComment>> => {
  return useQuery(
    [COMMENT_API_KEY.NEW_COMMENT, { record_id: recordId }],
    () => getNewComment({ recordId }),
    {
      suspense: true,
    },
  );
};

export default useGetNewComment;
