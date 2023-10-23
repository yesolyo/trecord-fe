import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { http } from '../_http';
import { GetAlarmResponse, GetAllAlarm } from '@/types/alarm';
import ALARM_API_KEY from './constants';
import { Page } from '@/types';
interface Props {
  pageCount: number;
  alarmType: string;
}

const getAlarm = async ({
  pageCount,
  alarmType,
}: Props): Promise<Page<GetAllAlarm>> => {
  const url = `/api/v1/notifications${
    alarmType === 'ALL' ? `` : `/type/${alarmType}`
  }?page=0&size=${pageCount}`;

  const response: Page<GetAllAlarm> = await http.authGet(url);
  return response;
};

const useGetAlarm = ({
  pageCount,
  alarmType,
}: Props): UseQueryResult<Page<GetAllAlarm>> => {
  return useQuery(
    [ALARM_API_KEY.ALL_ALARM, { pageCount, alarmType }],
    () => getAlarm({ pageCount, alarmType }),
    {
      suspense: true,
    },
  );
};

export default useGetAlarm;
