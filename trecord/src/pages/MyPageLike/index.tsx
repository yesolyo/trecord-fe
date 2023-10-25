import { NavBarNew } from '@components/common/navBar/NavBarNew';
import { useNavigate } from 'react-router-dom';
import { MyPageLikeList } from '@components/MyPageLike/MyPageLikeList';

export const MyPageLike = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavBarNew
        title="좋아요"
        isRegister={false}
        onClick={() => navigate(-1)}
      />
      <MyPageLikeList />
    </>
  );
};
