import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { http } from '../_http';
import { GetInvitationAlarmResponse } from '@/types/alarm';
import ALARM_API_KEY from './constants';

const getInvitationAlarm = async (): Promise<GetInvitationAlarmResponse> => {
  const url = `/api/v1/notifications/type/FEED_INVITATION`;
  const response: GetInvitationAlarmResponse = await http.authGet(url);
  return response;
};

const useGetInvitationAlarm =
  (): UseQueryResult<GetInvitationAlarmResponse> => {
    return useQuery(
      [ALARM_API_KEY.INVITATION_ALARM],
      () => getInvitationAlarm(),
      {
        suspense: true,
      },
    );
  };

export default useGetInvitationAlarm;
