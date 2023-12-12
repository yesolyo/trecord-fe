import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { http } from '../_http';
import { GetAlarm } from '@/types/alarm';
import ALARM_API_KEY from './constants';
import { Page } from '@/types';
interface Props {
  page: number;
  alarmType: string;
}

export const getAlarm = async ({
  page,
  alarmType,
}: Props): Promise<Page<GetAlarm>> => {
  const url = `/api/v1/notifications${
    alarmType === 'ALL' ? `` : `/type/${alarmType}`
  }?page=${page}&size=5`;

  const response: Page<GetAlarm> = await http.authGet(url);
  return response;
};

const useAlarmQuery = ({
  page,
  alarmType,
}: Props): UseQueryResult<Page<GetAlarm>> => {
  return useQuery(
    [ALARM_API_KEY.ALL_ALARM, { page, alarmType }],
    () => getAlarm({ page, alarmType }),
    {
      suspense: true,
    },
  );
};

export default useAlarmQuery;
