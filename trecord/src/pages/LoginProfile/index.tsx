import { LoginProfileImg } from '@components/LoginProfile/LoginProfileImg';
import { LoginProfileName } from '@components/LoginProfile/LoginProfileName';
import { useState } from 'react';
import * as S from './style';
import { LoginProfileIntroduce } from '@components/LoginProfile/LoginProfileIntroduce';
import { ImgUploadBtn } from '@components/common/ImgUploadBtn';
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
  return (
    <S.Layout>
      <S.TextBox>
        <span className="profileTitle">프로필</span>
        <span className="profileText">
          다른 사용자에게 보여지는 프로필을 설정해주세요
        </span>
      </S.TextBox>
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
