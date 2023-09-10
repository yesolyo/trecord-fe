import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { http } from '../_http';
import { GetLikeAlarmResponse } from '@/types/alarm';
import ALARM_API_KEY from './constants';

const getLikeAlarm = async (): Promise<GetLikeAlarmResponse> => {
  const url = `/api/v1/notifications/type/RECORD_LIKE`;
  const response: GetLikeAlarmResponse = await http.authGet(url);
  return response;
};

const useGetLikeAlarm = (): UseQueryResult<GetLikeAlarmResponse> => {
  return useQuery([ALARM_API_KEY.LIKE_ALARM], () => getLikeAlarm(), {
    suspense: true,
  });
};

export default useGetLikeAlarm;
