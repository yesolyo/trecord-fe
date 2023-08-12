import { recordList } from '@/types';
import { CircleTag } from './CircleTag/inedx';
import * as S from './style';
import { Icon } from '@components/common/Icon';
interface RecordSummaryProps {
  listData: recordList[];
}

export const RecordSummary = ({ listData }: RecordSummaryProps) => {
  return (
    <S.Layout>
      <S.AlignBox>
        <S.DayBox>
          <CircleTag />
          <Icon iconType="star" width={24} />
          <span>Day</span>
        </S.DayBox>
      </S.AlignBox>

      {listData.map((record) => (
        <S.DataBox key={record.id}>
          <CircleTag />
          <span>{record.title}</span>
        </S.DataBox>
      ))}
    </S.Layout>
  );
};
