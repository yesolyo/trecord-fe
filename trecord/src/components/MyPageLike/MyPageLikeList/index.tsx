import { GetMyPageLikeRespose } from '@/types/comment';
import { Icon } from '@components/common/Icon';
import * as S from './style';
import { Fragment } from 'react';
import { Empty } from '@components/common/Empty';
import { useNavigate } from 'react-router-dom';

export const MyPageLikeList = ({ ...props }: GetMyPageLikeRespose) => {
  const navigate = useNavigate();
  const constant = {
    icon: {
      width: 111.37,
      height: 73,
    },
    title: '앗!',
    subTitle: [
      {
        id: 1,
        body: '아직 좋아요가 없어요.',
      },
    ],
  };
  if (props.content.length === 0) return <Empty {...constant} />;
  return (
    <S.Layout>
      {props.content.map((like, index) => (
        <Fragment key={like.recordId}>
          <div
            className="container"
            onClick={() => navigate(`/recordDetail/${like.recordId}`)}
          >
            <Icon iconType="heart" width={24} />
            <div className="content">
              <span className="title ellipsis">{like.title}</span>
              <span className="sub ellipsis">{like.authorNickname}</span>
            </div>
            {like.imageUrl && <img src={like.imageUrl} className="img" />}
          </div>
          {props.content.length - 1 !== index && <hr className="line" />}
        </Fragment>
      ))}
    </S.Layout>
  );
};
