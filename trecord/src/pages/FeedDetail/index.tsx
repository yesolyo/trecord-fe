import { useNavigate, useParams } from 'react-router-dom';
import * as S from './style';
import { NavBarBackBtn } from '@components/common/NavBar/NavBarBackBtn';
import { Icon } from '@components/common/Icon';
import { ViewRecord } from '@components/FeedDetail/ViewRecord';
import { feelCategory } from '@/utils';
import { CircularButton } from '@components/common/button/CircularButton';
import SelectButton from '@components/common/button/SelectButton';
import { useDeleteFeed, useGetFeedDetail } from '@/apis';
import { ReactElement, useCallback, useMemo, useState } from 'react';
import Modal from '@components/common/Modal';
import { SELECT_INFOS } from '@/types';
import Skeleton from '@components/common/skeleton';
import ShareModalBody from '@components/common/Modal/ModalBody/ShareModalBody';
import useGetRecordList from '@/apis/Feed/getRecordList';
import ChipContainer from '@components/common/ChipContainer';

export const Fallback = (): ReactElement => {
  const navigate = useNavigate();
  return (
    <S.Layout>
      <NavBarBackBtn
        onBackBtnClick={() => navigate('/home')}
        isCategory={false}
      />
      <S.ImgBox>
        <Skeleton width="100%" height="509px" />
      </S.ImgBox>
      <S.ExplainBox>
        <S.IconBox>
          <div className="detail_name">
            <Skeleton height="20px" width="250px" />
          </div>
        </S.IconBox>
        <div className="detail_place">
          <Skeleton height="20px" width="40px" /> |{' '}
          <Skeleton height="20px" width="100px" /> ~{' '}
          <Skeleton height="20px" width="100px" />
        </div>
        <div className="detail_place">
          <Skeleton num={3} height="20px" width="50px" />
        </div>
        <S.EmojiBox>
          <div>만족도</div>
          <S.FeelBox>
            <Skeleton height="20px" width="24px" />
            <Skeleton height="20px" width="50px" />
          </S.FeelBox>
        </S.EmojiBox>
        <div
          style={{
            display: 'flex',
            gap: '10px',
            flexDirection: 'column',
            marginTop: '18px',
          }}
        >
          <Skeleton num={3} height="20px" width="100%" />
        </div>
      </S.ExplainBox>
    </S.Layout>
  );
};

export const FeedDetail = () => {
  const { id = '' } = useParams();
  const { data: detailData } = useGetFeedDetail({ id: id ?? '' });

  const contributors = useMemo(
    () => detailData?.contributors?.map((c) => c.nickname ?? '') ?? [],
    [detailData],
  );
  const { data: recordListData } = useGetRecordList({ id: id ?? '' });
  const { mutate: deleteFeed } = useDeleteFeed();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [openShareModal, setOpenShareModal] = useState(false);
  const [shareInput, setShareInput] = useState('');
  const handleConfirmDelete = useCallback(() => {
    deleteFeed(
      { id },
      {
        onSuccess: () => {
          navigate('/home', { replace: true });
        },
      },
    );
  }, [id, deleteFeed, navigate]);
  const handleChangeSelect = useCallback(
    (v: string) => {
      switch (v) {
        case 'MODIFY':
          navigate(`/modify-feed/${id}`);
          return;
        case 'DELETE':
          setOpenModal(true);
          return;
        case 'SHARE':
          setOpenShareModal(true);
          return;
        default:
      }
    },
    [navigate],
  );

  return (
    <>
      <S.Layout>
        {(detailData?.canModifyFeed || detailData?.canWriteRecord) && (
          <NavBarBackBtn
            onBackBtnClick={() => navigate('/home')}
            isCategory={false}
          />
        )}
        <S.ImgBox>
          <img src={detailData?.imageUrl} />
        </S.ImgBox>
        <S.ExplainBox>
          <S.IconBox>
            <div className="detail_name">{detailData?.name}</div>
            {detailData?.canModifyFeed && (
              <SelectButton
                options={SELECT_INFOS}
                onSelect={handleChangeSelect}
              />
            )}
          </S.IconBox>
          <div className="detail_place">
            {detailData?.place} | {detailData?.startAt} ~ {detailData?.endAt}
          </div>

          {contributors && contributors.length > 0 && (
            <ChipContainer names={contributors} />
          )}

          {detailData?.satisfaction && (
            <S.EmojiBox>
              <div>만족도</div>
              <S.FeelBox>
                <Icon iconType={detailData?.satisfaction} width={24} />
                <span>{feelCategory({ feel: detailData?.satisfaction })}</span>
              </S.FeelBox>
            </S.EmojiBox>
          )}
          <div className="detail_description">{detailData?.description}</div>
          {recordListData && detailData && (
            <ViewRecord
              feedId={id}
              listData={recordListData.content}
              endDate={detailData?.endAt}
              startDate={detailData?.startAt}
            />
          )}
        </S.ExplainBox>
        <div className="button-box">
          <CircularButton
            iconType={
              detailData?.canModifyFeed || detailData?.canWriteRecord
                ? 'edit'
                : 'login'
            }
            width={24}
            onClick={() => {
              const path =
                detailData?.canModifyFeed || detailData?.canWriteRecord
                  ? '/newRecord'
                  : '/login';
              navigate(path, {
                ...((detailData?.canModifyFeed ||
                  detailData?.canWriteRecord) && {
                  state: {
                    id: id,
                    maxDate: detailData.endAt,
                    minDate: detailData.startAt,
                  },
                }),
              });
            }}
          />
        </div>
      </S.Layout>
      <Modal
        openModal={openModal}
        title="피드를 삭제할까요?"
        body="피드의 기록들도 함께 삭제됩니다."
        closeText="취소"
        onClose={() => setOpenModal(false)}
        confirmText="삭제"
        onConfirm={handleConfirmDelete}
      />
      <Modal
        openModal={openShareModal}
        onClose={() => setOpenShareModal(false)}
      >
        <ShareModalBody
          feedId={+id}
          inputValue={shareInput}
          inputValueSetter={setShareInput}
        />
      </Modal>
    </>
  );
};
