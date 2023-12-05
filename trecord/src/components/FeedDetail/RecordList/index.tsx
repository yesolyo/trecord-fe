import { Page } from '@/types';
import * as S from './style';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DndContainer from './DndContainer';
import { recordList } from '@/types/record';
interface RecordListProps {
  recordListData: Page<recordList>;
  paginationLoading?: boolean;
  onClickPagination: () => void;
  feedId: string;
  endDate: string;
  startDate: string;
}
export const RecordList = ({
  recordListData,
  paginationLoading = false,
  onClickPagination,
  feedId,
  endDate,
  startDate,
}: RecordListProps) => {
  const result = recordListData.content.reduce(
    (acc, curr) => {
      const { date } = curr;
      if (acc[date]) acc[date].push(curr);
      else acc[date] = [curr];
      return acc;
    },
    {} as Record<string, typeof recordListData.content>,
  );
  return (
    <S.Layout>
      {Object.entries(result).map(([dayKey, dayData]) => (
        <S.GroupBox key={dayKey}>
          <h2>{dayKey}</h2>
          <DndProvider backend={HTML5Backend}>
            <DndContainer
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
