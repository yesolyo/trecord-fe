import { Page, recordList } from '@/types';
import * as S from './style';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DndContainer from './DndContainer';
interface RecordListProps {
  pageData: Page<recordList>;
  paginationLoading?: boolean;
  onClickPagination: () => void;
  feedId: string;
  listData: recordList[];
  endDate: string;
  startDate: string;
}
export const RecordList = ({
  pageData,
  paginationLoading = false,
  onClickPagination,
  feedId,
  listData,
  endDate,
  startDate,
}: RecordListProps) => {
  const result = listData.reduce(
    (acc, curr) => {
      const { date } = curr;
      if (acc[date]) acc[date].push(curr);
      else acc[date] = [curr];
      return acc;
    },
    {} as Record<string, typeof listData>,
  );

  return (
    <S.Layout>
      {Object.entries(result).map(([dayKey, dayData]) => (
        <S.GroupBox key={dayKey}>
          <h2>{dayKey}</h2>
          <DndProvider backend={HTML5Backend}>
            <DndContainer
              pageData={pageData}
              paginationLoading={paginationLoading}
              onClickPagination={onClickPagination}
              feedId={feedId}
              records={dayData}
              endDate={endDate}
              startDate={startDate}
            />
          </DndProvider>
        </S.GroupBox>
      ))}
    </S.Layout>
  );
};
