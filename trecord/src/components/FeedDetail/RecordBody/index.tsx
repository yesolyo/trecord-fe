import useRecordListInfiniteQuery from '@/apis/Record/useRecordListInfiniteQuery';
import { RecordList } from '../RecordList';
import { SummeryList } from '../SummeryList';

interface ReocrdBodyProps {
  isActive: boolean;
  feedId: string;
  endDate: string;
  startDate: string;
}
const RecordBody = ({
  isActive,
  feedId,
  endDate,
  startDate,
}: ReocrdBodyProps) => {
  const {
    data: recordListData,
    hasNextPage,
    isFetching,
    fetchNextPage,
  } = useRecordListInfiniteQuery({ id: feedId });
  return (
    <>
      {isActive ? (
        <RecordList
          recordListData={recordListData}
          paginationLoading={isFetching}
          paginationHasNextPage={hasNextPage}
          onClickPagination={fetchNextPage}
          feedId={feedId}
          endDate={endDate}
          startDate={startDate}
        />
      ) : (
        <SummeryList recordListData={recordListData} />
      )}
    </>
  );
};

export default RecordBody;
