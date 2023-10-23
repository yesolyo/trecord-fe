import { useState } from 'react';
import { RecordListBtn } from '../RecordListBtn';
import * as S from './style';
import { RecordList } from '../RecordList';
import { Page } from '@/types';
import styled from 'styled-components';
import EmptyIcon from '@/assets/components/EmptyIcon';
import { SummeryList } from '../SummeryList';
import { recordList } from '@/types/record';

const StyledEmptyDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 60px;
  color: var(--gray-900, #1e1e1e);
  text-align: center;
  font-family: Pretendard;
  font-style: normal;

  .big {
    font-size: 28px;
    font-weight: 600;
    line-height: 42px; /* 150% */
  }

  .small {
    color: #1e1e1e;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
`;
interface ViewRecordProps {
  pageData: Page<recordList>;
  paginationLoading?: boolean;
  onClickPagination: () => void;
  feedId: string;
  listData: recordList[];
  endDate: string;
  startDate: string;
}
export const ViewRecord = ({
  pageData,
  paginationLoading = false,
  onClickPagination,
  feedId,
  listData,
  endDate,
  startDate,
}: ViewRecordProps) => {
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
      {isActive && listData.length > 0 ? (
        <RecordList
          pageData={pageData}
          paginationLoading={paginationLoading}
          onClickPagination={onClickPagination}
          feedId={feedId}
          listData={listData}
          endDate={endDate}
          startDate={startDate}
        />
      ) : (
        <SummeryList listData={listData} />
      )}
      {listData.length === 0 && (
        <StyledEmptyDiv>
          <EmptyIcon />
          <p className="big">앗!</p>
          <div>
            <p className="small">아직 생성된 기록이 없어요.</p>
            <p className="small">여행 기록을 작성해 보세요.</p>
          </div>
        </StyledEmptyDiv>
      )}
    </S.Layout>
  );
};
