import { useState } from 'react';
import { RecordListBtn } from '../RecordListBtn';
import * as S from './style';
import RecordBody from '../RecordBody';
interface RecordContainerProps {
  feedId: string;
  endDate: string;
  startDate: string;
}
export const RecordContainer = ({ ...props }: RecordContainerProps) => {
  const [activeList, setActiveList] = useState('기록리스트');
  const [isActive, setIsActive] = useState(true);

  const handleShowRecordList = () => {
    setActiveList('기록리스트');
    setIsActive(true);
  };

  const handleShowSummeryRecordList = () => {
    setActiveList('요약보기');
    setIsActive(false);
  };
  return (
    <S.Layout>
      <div className="button_box">
        <RecordListBtn
          title="기록리스트"
          isActive={activeList}
          onClick={handleShowRecordList}
        />
        <RecordListBtn
          title="요약보기"
          isActive={activeList}
          onClick={handleShowSummeryRecordList}
        />
      </div>
      <RecordBody isActive={isActive} {...props} />
    </S.Layout>
  );
};
