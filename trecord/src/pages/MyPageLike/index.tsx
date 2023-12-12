import { NavBarNew } from '@components/common/NavBar/NavBarNew';
import { useNavigate } from 'react-router-dom';
import { MyPageLikeList } from '@components/MyPageLike/MyPageLikeList';
import useMyLikeListInfiniteQuery from '@/apis/MyPage/useMyLikeListInfiniteQuery';
import { Fragment, ReactElement } from 'react';
import * as S from './style';
import Skeleton from '@components/common/skeleton';
export const Fallback = (): ReactElement => {
  const contentList = Array.from({ length: 8 }, (_, i) => i + 1);
  return (
    <S.Layout>
      <NavBarNew title="좋아요" isRegister={false} />
      <div className="content">
        {contentList.map((content, index) => (
          <Fragment key={content}>
            <Skeleton width="100%" height="85px" />
            {index !== contentList.length - 1 && <hr />}
          </Fragment>
        ))}
      </div>
    </S.Layout>
  );
};
export const MyPageLike = () => {
  const navigate = useNavigate();
  const {
    data: likeListData,
    isLoading,
    hasNextPage,
    fetchNextPage,
  } = useMyLikeListInfiniteQuery();

  return (
    <>
      <NavBarNew
        title="좋아요"
        isRegister={false}
        onClick={() => navigate(-1)}
      />
      <MyPageLikeList
        likeListData={likeListData}
        isLoading={isLoading}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
      />
    </>
  );
};
