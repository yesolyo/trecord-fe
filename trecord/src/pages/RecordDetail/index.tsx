import * as S from './style';
import { ReactElement, useCallback, useMemo, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { SELECT_INFOS } from '@/types';
import { RecordDetailTitle } from '@components/RecordDetail/RecordDetailTitle';
import { RecordDetailSub } from '@components/RecordDetail/RecordDetailSub';
import { useDeleteRecord, useGetRecord } from '@/apis';
import styled from 'styled-components';
import { Icon } from '@components/common/Icon';
import { colorStyles } from '@/styles/color';
import SelectButton from '@components/common/button/SelectButton';
import Modal from '@components/common/Modal';
import Skeleton from '@components/common/skeleton';

const StyledNavbar = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  height: 70px;
  width: 350px;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  z-index: 10;
`;

export const Fallback = (): ReactElement => {
  return (
    <S.Layout>
      <S.DataBox>
        <div className="loading">
          <Skeleton width="80%" height="20px" />
          <div className="loading-title-area">
            <div className="title">
              <div>여행 날짜</div>
              <div>장소</div>
              <div>오늘의 기분</div>
              <div>이동 수단</div>
              <div>같이 간 사람</div>
            </div>
            <div className="content">
              <Skeleton width="70%" height="20px" num={5} />
            </div>
          </div>
          <hr />
          <div className="content">
            <Skeleton width="100%" height="300px" />
          </div>
        </div>
      </S.DataBox>
    </S.Layout>
  );
};

export const RecordDetail = () => {
  const { state } = useLocation();
  const { id: recordId = '' } = useParams();
  const { data: recordData } = useGetRecord({ id: recordId });
  const feedId = useMemo(() => recordData?.feedId, [recordData]);
  const isFromRecordShare = useMemo(() => {
    const fId = state ? state.feedId : undefined;
    return fId !== feedId;
  }, [state, feedId]);
  const { mutate: deleteRecord } = useDeleteRecord({ recordId });
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);

  const handleClickGoback = useCallback(() => {
    navigate(`/feedDetail/${feedId ?? recordData?.feedId}`);
  }, [navigate]);

  const handleChangeSelect = useCallback(
    (v: string) => {
      switch (v) {
        case 'MODIFY':
          navigate(`/modify-record/${recordId}`);
          return;
        case 'DELETE':
          setOpenModal(true);
          return;
        default:
      }
    },
    [navigate],
  );

  const handleConfirmDelete = useCallback(() => {
    deleteRecord(
      { recordId },
      {
        onSuccess: () => {
          navigate(`/feedDetail/${feedId}`, { replace: true });
        },
      },
    );
  }, [recordId, deleteRecord, navigate]);

  return (
    <>
      <S.Layout>
        <StyledNavbar>
          {((!recordData?.isUpdatable && !isFromRecordShare) ||
            recordData?.isUpdatable) && (
            <Icon
              iconType="arrow"
              width={24}
              fill={colorStyles.gray900}
              onClick={handleClickGoback}
            />
          )}

          {recordData?.isUpdatable && (
            <SelectButton
              right="3%"
              options={SELECT_INFOS}
              onSelect={handleChangeSelect}
            />
          )}
        </StyledNavbar>
        <S.DataBox>
          {recordData && <RecordDetailTitle recordData={recordData} />}
          {recordData && <RecordDetailSub recordData={recordData} />}
        </S.DataBox>
      </S.Layout>
      <Modal
        openModal={openModal}
        title="기록을 삭제할까요?"
        body="한 번 삭제하면 되돌릴 수 없어요"
        closeText="취소"
        onClose={() => setOpenModal(false)}
        confirmText="삭제"
        onConfirm={handleConfirmDelete}
      />
    </>
  );
};
