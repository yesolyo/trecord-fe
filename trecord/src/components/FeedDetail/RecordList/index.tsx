import * as S from '../RecordItem/style';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DndContainer from '../RecordDndContainer/DndContainer';
import { recordList } from '@/types/record';
import Pagination from '@components/common/Pagination';
interface RecordListProps {
  recordListData: recordList[] | undefined;
  paginationLoading?: boolean | undefined;
  paginationHasNextPage: boolean | undefined;
  onClickPagination: () => void;
  feedId: string;
  endDate: string;
  startDate: string;
}

export const RecordList = ({
  recordListData,
  paginationLoading = false,
  paginationHasNextPage,
  onClickPagination,
  feedId,
  endDate,
  startDate,
}: RecordListProps) => {
  const sortByDate = recordListData?.reduce(
    (acc, curr) => {
      const { date } = curr;

      if (acc[date]) acc[date].push(curr);
      else acc[date] = [curr];
      return acc;
    },
    {} as Record<string, typeof recordListData>,
  );

  return (
    <S.Layout>
      {sortByDate &&
        Object.entries(sortByDate).map(([date, records]) => (
          <S.GroupBox key={date}>
            <h2>{date}</h2>
            <DndProvider backend={HTML5Backend}>
              <DndContainer
                paginationLoading={paginationLoading}
                onClickPagination={onClickPagination}
                feedId={feedId}
                records={records}
                endDate={endDate}
                startDate={startDate}
              />
            </DndProvider>
          </S.GroupBox>
        ))}
      {paginationHasNextPage && (
        <Pagination
          text="기록 더보기"
          loading={paginationLoading}
          onClick={onClickPagination}
        />
      )}
    </S.Layout>
  );
};
