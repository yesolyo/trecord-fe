import { Page } from '@/types';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { http } from '../_http';
import { recordList } from '@/types/record';
import RECORD_API_KEY from './constants';

interface Props {
  id: string;
  page: number;
}

export const getRecordList = async ({
  id,
  page,
}: Props): Promise<Page<recordList>> => {
  const url = `/api/v1/feeds/${id}/records?page=${page}&size=5`;
  const response: Page<recordList> = await http.get(url);

  return response;
};

const useRecordListQuery = ({
  id,
  page,
}: Props): UseQueryResult<Page<recordList>> => {
  return useQuery(
    [RECORD_API_KEY.RECORD_LIST, { feed_id: id, page }],
    () => getRecordList({ id, page }),
    {
      suspense: true,
    },
  );
};

export default useRecordListQuery;
