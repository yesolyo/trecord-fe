import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { http } from '../_http';
<<<<<<< HEAD
import { GetAlarm } from '@/types/alarm';
=======
import { GetAlarmResponse, GetAllAlarm } from '@/types/alarm';
>>>>>>> 38f2edd ([FE] 알람 필터 바 개선 (#7))
import ALARM_API_KEY from './constants';
import { Page } from '@/types';
interface Props {
  pageCount: number;
  alarmType: string;
}

const getAlarm = async ({
  pageCount,
  alarmType,
<<<<<<< HEAD
}: Props): Promise<Page<GetAlarm>> => {
=======
}: Props): Promise<Page<GetAllAlarm>> => {
>>>>>>> 38f2edd ([FE] 알람 필터 바 개선 (#7))
  const url = `/api/v1/notifications${
    alarmType === 'ALL' ? `` : `/type/${alarmType}`
  }?page=0&size=${pageCount}`;

<<<<<<< HEAD
  const response: Page<GetAlarm> = await http.authGet(url);
=======
  const response: Page<GetAllAlarm> = await http.authGet(url);
>>>>>>> 38f2edd ([FE] 알람 필터 바 개선 (#7))
  return response;
};

const useGetAlarm = ({
  pageCount,
  alarmType,
<<<<<<< HEAD
}: Props): UseQueryResult<Page<GetAlarm>> => {
=======
}: Props): UseQueryResult<Page<GetAllAlarm>> => {
>>>>>>> 38f2edd ([FE] 알람 필터 바 개선 (#7))
  return useQuery(
    [ALARM_API_KEY.ALL_ALARM, { pageCount, alarmType }],
    () => getAlarm({ pageCount, alarmType }),
    {
      suspense: true,
    },
  );
};

export default useGetAlarm;
