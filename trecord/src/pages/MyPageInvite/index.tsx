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
      {data && <MyPageInviteList onDelete={handleDeleteInvite} {...data} />}
    </S.Layout>
  );
};
