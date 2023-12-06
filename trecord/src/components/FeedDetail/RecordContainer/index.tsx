import { useState } from 'react';
import { RecordListBtn } from '../RecordListBtn';
import * as S from './style';
import { RecordList } from '../RecordList';
import { Page } from '@/types';
import styled from 'styled-components';
import EmptyIcon from '@/assets/components/EmptyIcon';
import { SummeryList } from '../SummeryList';
import { recordList } from '@/types/record';
import { InfiniteData } from '@tanstack/react-query';
import useRecordListInfiniteQuery from '@/apis/Record/useRecordListInfiniteQuery';
import RecordBody from '../RecordBody';

const StyledEmptyDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 60px;
  color: ${({ theme }) => theme.colors.colorStyles.gray900};
  text-align: center;
  font-family: Pretendard;
  font-style: normal;

  .big {
    font-size: 28px;
    font-weight: 600;
    line-height: 42px; /* 150% */
  }

  .small {
    color: ${({ theme }) => theme.colors.colorStyles.gray900};
    font-size: 16px;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
`;
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
