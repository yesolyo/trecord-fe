import { useMutation, useQueryClient } from '@tanstack/react-query';

import { http } from '../_http';
import ALARM_API_KEY from './constants';

interface Props {
  id: number;
}

const deleteAlarm = async ({ id }: Props) => {
  const url = `/api/v1/notifications/${id}`;
  const response = await http.delete(url);

  return response;
};

const useAlarmDeleteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteAlarm, {
    onSuccess: () => {
      queryClient.invalidateQueries([ALARM_API_KEY.DELETE_ALARM]);
    },
    /** @TODO 나중에 error boundary 추가 */
    onError: (e) => console.log(e),
  });
};

export default useAlarmDeleteMutation;
