import { useInfiniteQuery } from '@tanstack/react-query';

import RECORD_API_KEY from './constants';
import { getRecordList } from './useRecordListQuery';
interface Props {
  id: string;
}
const useRecordListInfiniteQuery = ({ id }: Props) => {
  return useInfiniteQuery({
    queryKey: [RECORD_API_KEY.RECORD_LIST, { id }],
    queryFn: async ({ pageParam = 0 }) =>
      await getRecordList({ page: pageParam, id }),
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

export default useRecordListInfiniteQuery;
