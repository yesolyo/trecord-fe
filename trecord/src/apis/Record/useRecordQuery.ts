import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { http } from '../_http';
import RECORD_API_KEY from './constants';
import { recordDetailList } from '@/types/record';

interface Props {
  id: string;
}

const getRecord = async ({ id }: Props): Promise<recordDetailList> => {
  const url = `/api/v1/records/${id}`;
  const response: recordDetailList = await http.get(url);

  return response;
};

const useRecordQuery = ({ id }: Props): UseQueryResult<recordDetailList> => {
  return useQuery(
    [RECORD_API_KEY.RECORD, { record_id: id }],
    () => getRecord({ id }),
    {
      suspense: true,
    },
  );
};

export default useRecordQuery;
