import { GetMyPageInviteListProps } from '@/types/comment';
import { Icon } from '@components/common/Icon';
import * as S from './style';
import { Fragment, useState } from 'react';
import { Empty } from '@components/common/Empty';
import Modal from '@components/common/Modal';
import { useNavigate } from 'react-router-dom';
import { MoreButton } from '@components/common/MoreButton';

interface Props {
  inviteData: GetMyPageInviteListProps;
  onDelete: (id: number) => void;
  onPageCount: () => void;
}

export const MyPageInviteList = ({
  inviteData,
  onDelete,
  onPageCount,
}: Props) => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const constant = {
    icon: {
      width: 111.37,
      height: 73,
    },
    title: '앗!',
    subTitle: [
      {
        id: 1,
        body: '아직 초대된 피드가 없어요.',
      },
    ],
  };

  if (inviteData.content.length === 0) return <Empty {...constant} />;
  return (
    <S.Layout>
      {inviteData.content.map((i, index) => (
        <Fragment key={i.feedId}>
          <div className="container">
            {i.imageUrl && <img src={i.imageUrl} className="img" />}
            <div
              className="content"
              onClick={() => navigate(`/feedDetail/${i.feedId}`)}
            >
              <span className="title ellipsis">{i.feedName}</span>
              <span className="sub ellipsis">{i.ownerNickname}</span>
            </div>
            <Icon
              iconType="close"
              width={24}
              onClick={() => setIsActive(true)}
            />
          </div>
          {inviteData.content.length - 1 !== index && <hr className="line" />}
          <Modal
            openModal={isActive}
            title="해당 피드에서 나갈까요?"
            closeText="취소"
            confirmText="나가기"
            onClose={() => setIsActive(false)}
            onConfirm={() => onDelete(i.feedId)}
          />
        </Fragment>
      ))}
      {!inviteData.last && <MoreButton title="피드" onClick={onPageCount} />}
    </S.Layout>
  );
};
