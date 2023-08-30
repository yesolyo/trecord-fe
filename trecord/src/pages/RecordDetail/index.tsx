import * as S from './style';
import { useCallback, useState } from 'react';
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

const StyledNavbar = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  height: 70px;
  width: 350px;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  z-index: 10;
`;

export const RecordDetail = () => {
  const { state } = useLocation();
  const { feedId } = state;
  const { id: recordId = '' } = useParams();
  const { data: recordData } = useGetRecord({ id: recordId });
  const { mutate: deleteRecord } = useDeleteRecord({ recordId });
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);

  const handleClickGoback = useCallback(() => {
    navigate(`/feedDetail/${feedId}`);
  }, [navigate]);

  const handleChangeSelect = useCallback(
    (v: string) => {
      switch (v) {
        case 'MODIFY':
          // navigate(`/modify-feed/${id}`);
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
          <Icon
            iconType="arrow"
            width={24}
            fill={colorStyles.gray900}
            onClick={handleClickGoback}
          />
          <SelectButton
            right="3%"
            options={SELECT_INFOS}
            onSelect={handleChangeSelect}
          />
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
