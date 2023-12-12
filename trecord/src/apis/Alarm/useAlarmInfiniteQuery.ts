import { useInfiniteQuery } from '@tanstack/react-query';
import ALARM_API_KEY from './constants';
import { getAlarm } from './useAlarmQuery';
interface Props {
  alarmType: string;
}
const useAlarmInfiniteQuery = ({ alarmType }: Props) => {
  return useInfiniteQuery({
    queryKey: [ALARM_API_KEY.ALL_ALARM, { alarmType }],
    queryFn: async ({ pageParam = 0 }) =>
      await getAlarm({ page: pageParam, alarmType }),
    getNextPageParam: (lastPage, allPages) => {
      const calculateNextPageParam = () => {
        if (lastPage.last) return undefined;
        else {
          if (allPages.length === 1) {
            return allPages.length;
          } else {
            return allPages.length + 1;
          }
        }
      };
      const nextPageParam = calculateNextPageParam();
      return nextPageParam;
    },
  });
};

export default useAlarmInfiniteQuery;
