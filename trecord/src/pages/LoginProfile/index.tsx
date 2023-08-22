import { LoginProfileImg } from '@components/LoginProfile/LoginProfileImg';
import { LoginProfileName } from '@components/LoginProfile/LoginProfileName';
import { useState } from 'react';
import * as S from './style';
import { LoginProfileIntroduce } from '@components/LoginProfile/LoginProfileIntroduce';
import { ImgUploadBtn } from '@components/common/ImgUploadBtn';
import { NavBarProfile } from '@components/common/NavBar/NavBarProfile';
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

  const constant = {
    navBarProfile: {
      mainTitle: '프로필',
      subTitle: '다른 사용자에게 보여지는 프로필을 설정해주세요',
    },
  };
  return (
    <S.Layout>
      <NavBarProfile {...constant.navBarProfile} />
      <S.ProfileBox>
        <LoginProfileImg
          profileFile={setProfileFile}
          profileFileValue={profileFile}
        />
        <LoginProfileName
          nickNameValue={nickName}
          nickNameSetValue={setNickName}
        />
        <LoginProfileIntroduce
          introduceValue={introduce}
          introduceSetValue={setIntroduce}
        />
        <ImgUploadBtn
          imageFile={profileFile}
          saveImageUrl={setProfilUrl}
          imageUrl={profileUrl}
          nickNameValue={nickName}
          intrduceValue={introduce}
          title="시작하기"
        ></ImgUploadBtn>
      </S.ProfileBox>
    </S.Layout>
  );
};
