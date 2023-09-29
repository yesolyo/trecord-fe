import { NavBarNew } from '@components/common/NavBar/NavBarNew';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import useGetMyPageInvite from '@/apis/MyPage/getMyPageInvite';
import { MyPageInviteList } from '@components/MyPageInvite/MyPageInviteList';
import useDeleteMyPageInvite from '@/apis/MyPage/deleteMyPageInvite';
export const MyPageInvite = () => {
  const navigate = useNavigate();
  const { data, refetch } = useGetMyPageInvite();
  const { mutate } = useDeleteMyPageInvite();
  const mockData = {
    content: [
      {
        feedId: 4,
        feedName: 'name',
        ownerNickname: 'owner',
        imageUrl:
          'https://cdn.pixabay.com/photo/2023/08/30/09/24/leaves-8222919_1280.jpg',
      },
      {
        feedId: 3,
        feedName: 'name',
        ownerNickname: 'owner',
        imageUrl: null,
      },
      {
        feedId: 2,
        feedName: 'name',
        ownerNickname: 'owner',
        imageUrl: null,
      },
      {
        feedId: 1,
        feedName: 'name',
        ownerNickname: 'owner',
        imageUrl: null,
      },
    ],
  };
  const handleDeleteInvite = (id: number) => {
    mutate(
      {
        id,
      },
      {
        onSuccess: () => {
          refetch();
        },
      },
    );
  };
  return (
    <S.Layout>
      <NavBarNew
        title="초대된 피드"
        isRegister={false}
        onClick={() => navigate(-1)}
      />
      {data && <MyPageInviteList onDelete={handleDeleteInvite} {...mockData} />}
    </S.Layout>
  );
};
