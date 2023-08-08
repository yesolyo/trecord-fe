import { LoginProfileImg } from '@components/LoginProfile/LoginProfileImg';
import { LoginProfileName } from '@components/LoginProfile/LoginProfileName';
import { useState } from 'react';
import * as S from './style';
import { LoginProfileIntroduce } from '@components/LoginProfile/LoginProfileIntroduce';
import { useNavigate } from 'react-router-dom';
import { ImgUploadBtn } from '@components/common/ImgUploadBtn';
export const LoginProfile = () => {
  const [profileFile, setProfileFile] = useState<{
    imgFile: string;
    originFile: File | Blob | string;
  }>({
    imgFile:
      'https://cdn.pixabay.com/photo/2023/05/13/14/35/white-flower-7990645_1280.jpg',
    originFile: '',
  });
  const [nickName, setNickName] = useState<string>('');
  const [introduce, setIntroduce] = useState<string>('');
  const navigate = useNavigate();
  return (
    <S.Layout>
      <LoginProfileImg
        profileFile={setProfileFile}
        profileFileValue={profileFile}
      />
      <label htmlFor="nickName">닉네임: </label>
      <LoginProfileName
        nickNameValue={nickName}
        nickNameSetValue={setNickName}
      />
      <label htmlFor="profileIntroduce">소개글</label>
      <LoginProfileIntroduce
        introduceValue={introduce}
        introduceSetValue={setIntroduce}
      />
      <ImgUploadBtn imageFile={profileFile}></ImgUploadBtn>
    </S.Layout>
  );
};
