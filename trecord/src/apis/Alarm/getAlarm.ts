import { http } from '../_http';
import { GetAlarmResponse } from '@/types/alarm';

export const getAlarm = async (): Promise<GetAlarmResponse> => {
  const url = `/api/v1/notifications`;
  const response: GetAlarmResponse = await http.authGet(url);
  return response;
};
