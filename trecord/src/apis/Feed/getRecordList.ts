import { Page } from '@/types';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { http } from '../_http';
import FEED_API_KEY from './constants';
import { recordList } from '@/types/record';

interface Props {
  id: string;
  page: number;
}

const getRecordList = async ({
  id,
  page,
}: Props): Promise<Page<recordList>> => {
  const url = `/api/v1/feeds/${id}/records?page=${page}&size=5`;
  const response: Page<recordList> = await http.get(url);

  return response;
};

const useGetRecordList = ({
  id,
  page,
}: Props): UseQueryResult<Page<recordList>> => {
  return useQuery(
    [FEED_API_KEY.RECORD_LIST, { feed_id: id, page }],
    () => getRecordList({ id, page }),
    {
      suspense: true,
    },
  );
};

export default useGetRecordList;
