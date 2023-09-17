import { recordList } from '@/types';
import * as S from './style';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DndContainer from './DndContainer';

interface RecordListProps {
  feedId: string;
  listData: recordList[];
}
export const RecordList = ({ feedId, listData }: RecordListProps) => {
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
            <DndContainer feedId={feedId} records={dayData} />
          </DndProvider>
        </S.GroupBox>
      ))}
    </S.Layout>
  );
};
