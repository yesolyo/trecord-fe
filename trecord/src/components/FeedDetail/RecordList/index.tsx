import { recordList } from '@/types';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@components/common/Icon';
interface RecordListProps {
  feedId: string;
  listData: recordList[];
}
export const RecordList = ({ feedId, listData }: RecordListProps) => {
  console.log(listData);
  const navigate = useNavigate();
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
            <S.ItemBox
              key={record.id}
              onClick={() =>
                navigate(`/recordDetail/${record.id}`, {
                  state: {
                    feedId,
                  },
                })
              }
            >
              <S.DataBox>
                {record.imageUrl && <S.ImgBox src={record.imageUrl}></S.ImgBox>}
                <div className="record_title">{record.title}</div>
                <div className="icon-container">
                  <Icon iconType="change" width={24} height={24} />
                </div>
              </S.DataBox>
            </S.ItemBox>
          ))}
        </S.GroupBox>
      ))}
    </S.Layout>
  );
};
