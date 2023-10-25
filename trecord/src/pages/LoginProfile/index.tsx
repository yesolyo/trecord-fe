import { LoginProfileImg } from '@components/LoginProfile/LoginProfileImg';
import { LoginProfileName } from '@components/LoginProfile/LoginProfileName';
import { useState } from 'react';
import * as S from './style';
import { LoginProfileIntroduce } from '@components/LoginProfile/LoginProfileIntroduce';
import { ProfileNewButton } from '@components/common/button/ProfileNewButton';
import { NavBarProfile } from '@components/common/NavBar/NavBarProfile';
import { ProfileFileProps } from '@/types/mypage';

export const LoginProfile = () => {
  const [profileFile, setProfileFile] = useState<ProfileFileProps>({
    imgFile: '',
    originFile: '',
  });
  const [profileUrl, setProfilUrl] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [introduce, setIntroduce] = useState<string>('');
  const [isDuplicateNickname, setIsDuplicateNickname] = useState<boolean>(true);
  const [edit, setEdit] = useState(true);
  const handleSaveProfileFile = (file: ProfileFileProps) => {
    setProfileFile(file);
  };
  const handleCheckDuplicateNickname = (b: boolean) => {
    setIsDuplicateNickname(b);
  };

  const handleSaveNickname = (name: string) => {
    setNickname(name);
  };
  const handleClickEdit = (b: boolean) => {
    setEdit(b);
  };

  const constant = {
    navBarProfile: {
      title: '프로필',
      body: '다른 사용자에게 보여지는 프로필을 설정해주세요',
    },
    profileImg: {
      onSaveProfileFile: handleSaveProfileFile,
      profileFile: profileFile,
    },
    profileName: {
      nickname,
      onSaveNickname: handleSaveNickname,
      onCheckDuplicateNickname: handleCheckDuplicateNickname,
      edit,
      onClickEdit: handleClickEdit,
    },
    profileIntroduce: {
      introduceValue: introduce,
      introduceSetValue: setIntroduce,
    },
    uploadBtn: {
      imageFile: profileFile,
      saveImageUrl: setProfilUrl,
      imageUrl: profileUrl,
      nickname,
      intrduceValue: introduce,
      isDuplicateNickname,
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
