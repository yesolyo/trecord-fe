import { useState } from 'react';
import { RecordListBtn } from '../RecordListBtn';
import * as S from './style';
import { RecordList } from '../RecordList';
import { RecordSummary } from '../RecordSummary';
import { recordList } from '@/types';
interface ViewRecordProps {
  feedId: string;
  listData: recordList[];
}
export const ViewRecord = ({ feedId, listData }: ViewRecordProps) => {
  const [activeList, setActiveList] = useState('기록리스트');
  const [isActive, setIsActive] = useState(true);
  return (
    <S.Layout>
      <S.BtnBox>
        <RecordListBtn
          title="기록리스트"
          isActive={activeList}
          onClick={() => {
            setActiveList('기록리스트');
            setIsActive(true);
          }}
        />
        <RecordListBtn
          title="요약보기"
          isActive={activeList}
          onClick={() => {
            setActiveList('요약보기');
            setIsActive(false);
          }}
        />
      </S.BtnBox>
      {isActive ? (
        <RecordList feedId={feedId} listData={listData} />
      ) : (
        <RecordSummary listData={listData} />
      )}
    </S.Layout>
  );
};
