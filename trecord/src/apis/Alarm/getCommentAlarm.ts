import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { http } from '../_http';
import { GetCommentAlarmResponse } from '@/types/alarm';
import ALARM_API_KEY from './constants';
interface Props {
  pageCount: number;
}
const getCommentAlarm = async ({
  pageCount,
}: Props): Promise<GetCommentAlarmResponse> => {
  const url = `/api/v1/notifications/type/COMMENT?page=0&size=${pageCount}`;
  const response: GetCommentAlarmResponse = await http.authGet(url);
  return response;
};

const useGetCommentAlarm = ({
  pageCount,
}: Props): UseQueryResult<GetCommentAlarmResponse> => {
  return useQuery(
    [ALARM_API_KEY.COMMENT_ALARM, { pageCount }],
    () => getCommentAlarm({ pageCount }),
    {
      suspense: true,
    },
  );
};

export default useGetCommentAlarm;
