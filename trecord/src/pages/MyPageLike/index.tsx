import useGetMyPageLike from '@/apis/MyPage/getMyPageLike';
import { NavBarNew } from '@components/common/NavBar/NavBarNew';
import { useNavigate } from 'react-router-dom';
import { MyPageLikeList } from '@components/MyPageLike/MyPageLikeList';
import { useState } from 'react';

export const MyPageLike = () => {
  const [pageCount, setPageCount] = useState(10);
  const { data } = useGetMyPageLike({ pageCount });
  const navigate = useNavigate();
  const handlePageCount = () => {
    setPageCount((prev) => prev + 10);
  };
  return (
    <>
      <NavBarNew
        title="좋아요"
        isRegister={false}
        onClick={() => navigate(-1)}
      />
      {data && <MyPageLikeList likeData={data} onPageCount={handlePageCount} />}
    </>
  );
};
