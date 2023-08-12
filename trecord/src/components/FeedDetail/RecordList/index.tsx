import { recordList } from '@/types';
import * as S from './style';
interface RecordListProps {
  listData: recordList[];
}
export const RecordList = ({ listData }: RecordListProps) => {
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
          {dayData.map((record) => (
            <S.ItemBox key={record.id}>
              <S.DataBox>
                <div className="record_title">{record.title}</div>
              </S.DataBox>
            </S.ItemBox>
          ))}
        </S.GroupBox>
      ))}
    </S.Layout>
  );
};
