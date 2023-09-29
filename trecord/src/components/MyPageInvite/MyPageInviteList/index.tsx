import { GetMyPageInviteListProps } from '@/types/comment';
import { Icon } from '@components/common/Icon';
import * as S from './style';
import { Fragment, useState } from 'react';
import { Empty } from '@components/common/Empty';
import Modal from '@components/common/Modal';
import { useNavigate } from 'react-router-dom';

export const MyPageInviteList = ({ ...props }: GetMyPageInviteListProps) => {
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

  if (props.content.length === 0) return <Empty {...constant} />;
  return (
    <S.Layout>
      {props.content.map((invite, index) => (
        <Fragment key={invite.feedId}>
          <div className="container">
            {invite.imageUrl && <img src={invite.imageUrl} className="img" />}
            <div
              className="content"
              onClick={() => navigate(`/feedDetail/${invite.feedId}`)}
            >
              <span className="title ellipsis">{invite.feedName}</span>
              <span className="sub ellipsis">{invite.ownerNickname}</span>
            </div>
            <Icon
              iconType="close"
              width={24}
              onClick={() => setIsActive(true)}
            />
          </div>
          {props.content.length - 1 !== index && <hr className="line" />}
          <Modal
            openModal={isActive}
            title="해당 피드에서 나갈까요?"
            closeText="취소"
            confirmText="나가기"
            onClose={() => setIsActive(false)}
            onConfirm={() => props.onDelete(invite.feedId)}
          />
        </Fragment>
      ))}
    </S.Layout>
  );
};
