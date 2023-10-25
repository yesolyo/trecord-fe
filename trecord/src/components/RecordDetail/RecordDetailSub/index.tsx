import { recordDetailList } from '@/types/record';
import * as S from './style';
interface RecordDetailSubProps {
  recordData: recordDetailList;
}
export const RecordDetailSub = ({ recordData }: RecordDetailSubProps) => {
  return (
    <S.Layout
      dangerouslySetInnerHTML={{
        __html: recordData.content,
      }}
    />
  );
};
