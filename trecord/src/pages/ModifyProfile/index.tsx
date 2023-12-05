import { LoginProfileImg } from '@components/LoginProfile/LoginProfileImg';
import { LoginProfileName } from '@components/LoginProfile/LoginProfileName';
import { useState } from 'react';
import * as S from './style';
import { LoginProfileIntroduce } from '@components/LoginProfile/LoginProfileIntroduce';
import { MainTabBar } from '@components/common/TabBar/MainTabBar';
import { NavBarAllowProfile } from '@components/common/NavBar/NavBarAllowProfile';
import { useNavigate } from 'react-router-dom';
import useGetMyPageProfile from '@/apis/MyPage/useMyPageProfileQuery';
import { SquareBtn } from '@components/common/SquareBtn';
import useNewUserMutation from '@/apis/User/useNewUserMutation';

export const ModifyProfile = () => {
  const navigate = useNavigate();
  const { mutate } = useNewUserMutation();
  const { data } = useGetMyPageProfile();

  const [profileImgUrl, setProfileImgUrl] = useState<string>(
    data?.imageUrl ?? '',
  );
  const [nickname, setNickname] = useState<string>(data?.nickname ?? '');
  const [introduce, setIntroduce] = useState<string>(data?.introduction ?? '');
  const [isDuplicateNickname, setIsDuplicateNickname] =
    useState<boolean>(false);

  const handleIsDuplicateNickname = (b: boolean) => {
    setIsDuplicateNickname(b);
  };

  const handleSaveProfileImgUrl = (url: string) => {
    setProfileImgUrl(url);
  };

  const handleSaveNickname = (name: string) => {
    setNickname(name);
  };
  const handleSaveIntroduce = (s: string) => {
    setIntroduce(s);
  };

  const handleClickRegisterNewUser = async (e: any) => {
    e.preventDefault();
    mutate(
      {
        nickname,
        imageUrl: profileImgUrl,
        introduction: introduce,
      },
      {
        onSuccess: () => {
          navigate('/mypage', { replace: true });
        },
      },
    );
  };

  return (
    <>
      <NavBarAllowProfile
        mainTitle="마이페이지"
        onClick={() => navigate('/mypage')}
      />
      <S.ProfileBox onSubmit={handleClickRegisterNewUser}>
        <LoginProfileImg
          onSaveProfileImgUrl={handleSaveProfileImgUrl}
          profileImgUrl={profileImgUrl}
        />
        <LoginProfileName
          nickname={nickname}
          onSaveNickname={handleSaveNickname}
          onIsDuplicateNickname={handleIsDuplicateNickname}
        />
        <LoginProfileIntroduce
          introduce={introduce}
          onSaveIntroduce={handleSaveIntroduce}
        />
        <SquareBtn
          type="submit"
          title="시작하기"
          disabled={isDuplicateNickname}
        />
      </S.ProfileBox>
      <MainTabBar currentPage="mypage" />
    </>
  );
};
