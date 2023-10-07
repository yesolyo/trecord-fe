import { Icon } from '@components/common/Icon';
import * as S from './style';
import { Fragment } from 'react';
import { Empty } from '@components/common/Empty';
import { useNavigate } from 'react-router-dom';
import Pagination from '@components/common/Pagination';
import usePagedData from '@/hooks/usePagedData';
import useGetMyPageLike from '@/apis/MyPage/getMyPageLike';
export const MyPageLikeList = () => {
  const {
    data: likeData,
    isLoading,
    paginationClickEventHandler: handleClickPagination,
  } = usePagedData({
    queryFunctionProps: { page: 0 },
    queryFunction: useGetMyPageLike,
  });
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
  if (likeData?.content.length === 0) return <Empty {...constant} />;
  return (
    <S.Layout>
      {likeData?.content.map((l, index) => (
        <Fragment key={l.recordId}>
          <div
            className="container"
            onClick={() => navigate(`/recordDetail/${l.recordId}`)}
          >
            <Icon iconType="heart" width={24} />
            <div className="content">
              <span className="title ellipsis">{l.title}</span>
              <span className="sub ellipsis">{l.authorNickname}</span>
            </div>
            {l.imageUrl && <img src={l.imageUrl} className="img" />}
          </div>
          {likeData.content.length - 1 !== index && <hr className="line" />}
        </Fragment>
      ))}
      {!likeData?.last && (
        <Pagination
          text="좋아요 더보기"
          onClick={handleClickPagination}
          loading={isLoading}
        />
      )}
    </S.Layout>
  );
};
