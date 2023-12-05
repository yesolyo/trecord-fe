import { useState } from 'react';
import * as S from './style';
import { MainTabBar } from '@components/common/TabBar/MainTabBar';
import { NavBarProfile } from '@components/common/NavBar/NavBarProfile';
import { MyPageTitle } from '@components/MyPage/MyPageTitle';
import { useNavigate } from 'react-router-dom';
import Modal from '@components/common/Modal';
import useMyPageProfileQuery from '@/apis/MyPage/useMyPageProfileQuery';
import { MyPageMenuList } from '@components/MyPage/MyPageMenuList';

export const MyPage = () => {
  const [isLogoutModal, setIsLogoutModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const { data: userProfileData } = useMyPageProfileQuery();

  const hanldeIsLogoutModal = () => {
    setIsLogoutModal((prev) => !prev);
  };

  return (
    <>
      <NavBarProfile title="마이페이지" />
      <S.Layout>
        {userProfileData && (
          <>
            <MyPageTitle
              imgUrl={userProfileData?.imageUrl}
              nickname={userProfileData.nickname}
              introduce={userProfileData.introduction}
            />
            <hr className="line_thick" />
            <MyPageMenuList
              userProfileData={userProfileData}
              onIsLogoutModal={hanldeIsLogoutModal}
            />
          </>
        )}
      </S.Layout>
      <Modal
        openModal={isLogoutModal}
        title="로그아웃 하시겠습니까?"
        confirmText="로그아웃"
        closeText="취소"
        onConfirm={() => navigate('/login')}
        onClose={() => setIsLogoutModal(false)}
      />
      <MainTabBar currentPage="mypage" />
    </>
  );
};
