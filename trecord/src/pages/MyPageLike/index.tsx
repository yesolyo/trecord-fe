import useGetMyPageLike from '@/apis/MyPage/getMyPageLike';
import { NavBarNew } from '@components/common/NavBar/NavBarNew';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { MyPageLikeList } from '@components/MyPageLike/MyPageLikeList';

export const MyPageLike = () => {
  const { data } = useGetMyPageLike();
  const navigate = useNavigate();

  return (
    <S.Layout>
      <NavBarNew
        title="좋아요"
        isRegister={false}
        onClick={() => navigate(-1)}
      />
      {data && <MyPageLikeList {...data} />}
    </S.Layout>
  );
};
