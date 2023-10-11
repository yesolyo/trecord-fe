import { useState } from 'react';
import * as S from './style';
import { TabBar } from '@components/common/TabBar';
import { NavBarProfile } from '@components/common/NavBar/NavBarProfile';
import { MyPageTitle } from '@components/MyPage/MyPageTitle';
import { MyPageMenu, mypageMenuProps } from '@components/MyPage/MyPageMenu';
import { useNavigate } from 'react-router-dom';
import Modal from '@components/common/Modal';
import useGetMyPageProfile from '@/apis/MyPage/getMyPageProfil';

export const MyPage = () => {
  const [isLogoutModal, setIsLogoutModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const { data } = useGetMyPageProfile();

  const menuServiceConstant: mypageMenuProps = {
    title: '서비스 설정',
    menuList: [
      {
        id: 1,
        btnIcon: 'userEdit',
        btnTitle: '프로필 변경',
        onClick: () => navigate('/mypageProfile'),
      },
    ],
  };

  const menuActiveConstant: mypageMenuProps = {
    title: '나의 활동',
    menuList: [
      {
        id: 1,
        btnIcon: 'heart',
        btnTitle: '좋아요',
        onClick: () => navigate('/mypageLike'),
      },
      {
        id: 2,
        btnIcon: 'message',
        btnTitle: '댓글',
        onClick: () => navigate('/mypageComment'),
      },
      {
        id: 3,
        btnIcon: 'invite',
        btnTitle: '초대된 피드',
        onClick: () => navigate('/mypageInvite'),
      },
    ],
  };

  const menuEtcConstant: mypageMenuProps = {
    title: '기타',
    menuList: [
      {
        id: 1,
        btnTitle: '로그아웃',
        onClick: () => setIsLogoutModal(true),
      },
    ],
  };

  return (
    <>
      <NavBarProfile mainTitle="마이페이지" />
      <S.Layout>
        {data && (
          <MyPageTitle
            imgUrl={data?.imageUrl}
            nickname={data.nickname}
            introduce={data.introduction}
          />
        )}

        <S.ThickLineBox />
        <MyPageMenu {...menuServiceConstant} />
        <S.ThinLineBox />
        <MyPageMenu {...menuActiveConstant} />
        <S.ThinLineBox />
        <MyPageMenu {...menuEtcConstant} />
      </S.Layout>
      <Modal
        openModal={isLogoutModal}
        title="로그아웃 하시겠습니까?"
        confirmText="로그아웃"
        closeText="취소"
        onConfirm={() => navigate('/login')}
        onClose={() => setIsLogoutModal(false)}
      />
      <TabBar currentPage="mypage" />
    </>
  );
};
