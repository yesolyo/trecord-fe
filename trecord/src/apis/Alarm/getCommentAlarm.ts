import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { http } from '../_http';
import { GetCommentAlarmResponse } from '@/types/alarm';
import ALARM_API_KEY from './constants';

const getCommentAlarm = async (): Promise<GetCommentAlarmResponse> => {
  const url = `/api/v1/notifications/type/COMMENT`;
  const response: GetCommentAlarmResponse = await http.authGet(url);
  return response;
};

const useGetCommentAlarm = (): UseQueryResult<GetCommentAlarmResponse> => {
  return useQuery([ALARM_API_KEY.COMMENT_ALARM], () => getCommentAlarm(), {
    suspense: true,
  });
};

export default useGetCommentAlarm;
