import useGetMyPageLike from '@/apis/MyPage/getMyPageLike';
import { NavBarNew } from '@components/common/NavBar/NavBarNew';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { MyPageLikeList } from '@components/MyPageLike/MyPageLikeList';

export const MyPageLike = () => {
  const { data } = useGetMyPageLike();
  const navigate = useNavigate();
  const mockData = {
    content: [
      {
        recordId: 4,
        title: '안녕반가워 나는 땡땡이야rnformfodfjdlrgddfsfd',
        imageUrl:
          'https://cdn.pixabay.com/photo/2023/08/30/09/24/leaves-8222919_1280.jpg',
        authorId: 1,
        authorNickname: 'hello',
      },
      {
        recordId: 1,
        title: 'record',
        imageUrl: null,
        authorId: 4,
        authorNickname: 'hello2',
      },
    ],
  };
  return (
    <S.Layout>
      <NavBarNew
        title="좋아요"
        isRegister={false}
        onClick={() => navigate(-1)}
      />
      {data && <MyPageLikeList {...mockData} />}
    </S.Layout>
  );
};
