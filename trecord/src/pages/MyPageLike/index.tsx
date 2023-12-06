import { NavBarNew } from '@components/common/NavBar/NavBarNew';
import { useNavigate } from 'react-router-dom';
import { MyPageLikeList } from '@components/MyPageLike/MyPageLikeList';
import useMyLikeListInfiniteQuery from '@/apis/MyPage/useMyLikeListInfiniteQuery';

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
