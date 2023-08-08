import { LoginProfileImg } from '@components/LoginProfile/LoginProfileImg';
import { LoginProfileName } from '@components/LoginProfile/LoginProfileName';
import { useState } from 'react';
import * as S from './style';
import { LoginProfileIntroduce } from '@components/LoginProfile/LoginProfileIntroduce';
import { useNavigate } from 'react-router-dom';
export const LoginProfile = () => {
  const [profileFile, setProfileFile] = useState<{
    imgFile: string;
    originFile: File | null;
  }>({
    imgFile: '',
    originFile: null,
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
      <button
        disabled={nickName.length <= 0}
        onClick={() => {
          navigate('/home');
        }}
      >
        건너뛰기
      </button>
    </S.Layout>
  );
};
