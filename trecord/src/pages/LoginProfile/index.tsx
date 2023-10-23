import { LoginProfileImg } from '@components/LoginProfile/LoginProfileImg';
import { LoginProfileName } from '@components/LoginProfile/LoginProfileName';
import { useState } from 'react';
import * as S from './style';
import { LoginProfileIntroduce } from '@components/LoginProfile/LoginProfileIntroduce';
import { ProfileNewButton } from '@components/common/button/ProfileNewButton';
import { NavBarProfile } from '@components/common/navBar/NavBarProfile';

export const LoginProfile = () => {
  const [profileFile, setProfileFile] = useState<{
    imgFile: string;
    originFile: File | Blob | string;
  }>({
    imgFile: '',
    originFile: '',
  });
  const [profileUrl, setProfilUrl] = useState<string>('');
  const [nickName, setNickName] = useState<string>('');
  const [introduce, setIntroduce] = useState<string>('');
  const [isNickName, setIsNickName] = useState<boolean>(true);

  const constant = {
    navBarProfile: {
      mainTitle: '프로필',
      subTitle: '다른 사용자에게 보여지는 프로필을 설정해주세요',
    },
    profileImg: {
      profileFile: setProfileFile,
      profileFileValue: profileFile,
    },
    profileName: {
      nickNameValue: nickName,
      nickNameSetValue: setNickName,
      setIsNickName,
    },
    profileIntroduce: {
      introduceValue: introduce,
      introduceSetValue: setIntroduce,
    },
    uploadBtn: {
      imageFile: profileFile,
      saveImageUrl: setProfilUrl,
      imageUrl: profileUrl,
      nickNameValue: nickName,
      intrduceValue: introduce,
      isNickName,
      title: '시작하기',
    },
  };

  return (
    <S.Layout>
      <NavBarProfile {...constant.navBarProfile} />
      <S.ProfileBox>
        <LoginProfileImg {...constant.profileImg} />
        <LoginProfileName {...constant.profileName} />
        <LoginProfileIntroduce {...constant.profileIntroduce} />
        <ProfileNewButton {...constant.uploadBtn}></ProfileNewButton>
      </S.ProfileBox>
    </S.Layout>
  );
};
