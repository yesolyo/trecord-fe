import { recordList } from '@/types';
import * as S from './style';
interface RecordListProps {
  listData: recordList[];
}
export const RecordList = ({ listData }: RecordListProps) => {
  return <S.Layout>기록 리스트임</S.Layout>;
};
