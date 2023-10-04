import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { http } from '../_http';
import { GetAllAlarmResponse } from '@/types/alarm';
import ALARM_API_KEY from './constants';
interface Props {
  pageCount: number;
}

const getAllAlarm = async ({
  pageCount,
}: Props): Promise<GetAllAlarmResponse> => {
  const url = `/api/v1/notifications?page=0&size=${pageCount}`;
  const response: GetAllAlarmResponse = await http.authGet(url);
  return response;
};

const useGetAllAlarm = ({
  pageCount,
}: Props): UseQueryResult<GetAllAlarmResponse> => {
  return useQuery(
    [ALARM_API_KEY.ALL_ALARM, { pageCount }],
    () => getAllAlarm({ pageCount }),
    {
      suspense: true,
    },
  );
};

export default useGetAllAlarm;
