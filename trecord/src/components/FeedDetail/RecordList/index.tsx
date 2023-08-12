import { recordList } from '@/types';
import * as S from './style';
interface RecordListProps {
  listData: recordList[];
}
export const RecordList = ({ listData }: RecordListProps) => {
  return (
    <S.Layout>
      {listData.map((record) => (
        <S.ItemBox key={record.id}>
          <S.ImgBox></S.ImgBox>
          <S.DataBox>
            <div className="record_date">{record.date}</div>
            <div className="record_title">{record.title}</div>
          </S.DataBox>
        </S.ItemBox>
      ))}
    </S.Layout>
  );
};
