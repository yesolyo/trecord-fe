import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { http } from '../_http';
import { GetInvitationAlarmResponse } from '@/types/alarm';
import ALARM_API_KEY from './constants';
interface Props {
  pageCount: number;
}
const getInvitationAlarm = async ({
  pageCount,
}: Props): Promise<GetInvitationAlarmResponse> => {
  const url = `/api/v1/notifications/type/FEED_INVITATION?page=0&size=${pageCount}`;
  const response: GetInvitationAlarmResponse = await http.authGet(url);
  return response;
};

const useGetInvitationAlarm = ({
  pageCount,
}: Props): UseQueryResult<GetInvitationAlarmResponse> => {
  return useQuery(
    [ALARM_API_KEY.INVITATION_ALARM, { pageCount }],
    () => getInvitationAlarm({ pageCount }),
    {
      suspense: true,
    },
  );
};

export default useGetInvitationAlarm;
