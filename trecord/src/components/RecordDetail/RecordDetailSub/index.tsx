import { recordDetailList } from '@/types';
import * as S from './style';
interface RecordDetailSubProps {
  recordData: recordDetailList;
}
export const RecordDetailSub = ({ recordData }: RecordDetailSubProps) => {
  return <S.Layout>{recordData.content}</S.Layout>;
};
