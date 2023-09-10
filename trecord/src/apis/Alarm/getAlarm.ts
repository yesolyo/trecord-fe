import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { http } from '../_http';
import { GetAllAlarmResponse } from '@/types/alarm';
import ALARM_API_KEY from './constants';

const getAllAlarm = async (): Promise<GetAllAlarmResponse> => {
  const url = `/api/v1/notifications`;
  const response: GetAllAlarmResponse = await http.authGet(url);
  return response;
};

const useGetAllAlarm = (): UseQueryResult<GetAllAlarmResponse> => {
  return useQuery([ALARM_API_KEY.ALL_ALARM], () => getAllAlarm(), {
    suspense: true,
  });
};

export default useGetAllAlarm;
