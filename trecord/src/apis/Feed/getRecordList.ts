import { recordListProps } from '@/types';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { http } from '../_http';
import FEED_API_KEY from './constants';

interface Props {
  id: string;
}

const getRecordList = async ({ id }: Props): Promise<recordListProps> => {
  const url = `/api/v1/feeds/${id}/records`;
  const response: recordListProps = await http.get(url);

  return response;
};

const useGetRecordList = ({ id }: Props): UseQueryResult<recordListProps> => {
  return useQuery(
    [FEED_API_KEY.RECORD_LIST, { feed_id: id }],
    () => getRecordList({ id }),
    {
      suspense: true,
    },
  );
};

export default useGetRecordList;
