import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { http } from '../_http';
import { GetLikeAlarmResponse } from '@/types/alarm';
import ALARM_API_KEY from './constants';
interface Props {
  pageCount: number;
}
const getLikeAlarm = async ({
  pageCount,
}: Props): Promise<GetLikeAlarmResponse> => {
  const url = `/api/v1/notifications/type/RECORD_LIKE?page=0&size=${pageCount}`;
  const response: GetLikeAlarmResponse = await http.authGet(url);
  return response;
};

const useGetLikeAlarm = ({
  pageCount,
}: Props): UseQueryResult<GetLikeAlarmResponse> => {
  return useQuery(
    [ALARM_API_KEY.LIKE_ALARM, { pageCount }],
    () => getLikeAlarm({ pageCount }),
    {
      suspense: true,
    },
  );
};

export default useGetLikeAlarm;
