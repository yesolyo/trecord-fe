import { useRecordListInfiniteQuery } from '@/apis';
import { RecordList } from '../RecordList';
import { SummeryList } from '../SummeryList';
import { Empty } from '@components/common/Empty';

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
    isLoading,
    fetchNextPage,
  } = useRecordListInfiniteQuery({ id: feedId });
  const constant = {
    icon: {
      width: 111.37,
      height: 73,
    },
    title: '앗!',
    subTitle: [
      {
        id: 1,
        body: '아직 기록 리스트가 없어요.',
      },
    ],
  };
  const concatenatePages = recordListData?.pages.flatMap(
    (page) => page.content,
  );

  if (recordListData?.pages[0].content.length === 0)
    return <Empty {...constant} />;
  return (
    <>
      {isActive ? (
        <RecordList
          recordListData={concatenatePages}
          paginationLoading={isLoading}
          paginationHasNextPage={hasNextPage}
          onClickPagination={fetchNextPage}
          feedId={feedId}
          endDate={endDate}
          startDate={startDate}
        />
      ) : (
        <SummeryList
          recordListData={concatenatePages}
          paginationLoading={isLoading}
          paginationHasNextPage={hasNextPage}
          onClickPagination={fetchNextPage}
        />
      )}
    </>
  );
};

export default RecordBody;
