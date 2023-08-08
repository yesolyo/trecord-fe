import { LoginProfileImg } from '@components/LoginProfile/LoginProfileImg';
import { LoginProfileName } from '@components/LoginProfile/LoginProfileName';
import { useState } from 'react';
import * as S from './style';
import { LoginProfileIntroduce } from '@components/LoginProfile/LoginProfileIntroduce';
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
  return (
    <S.Layout>
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
      <button disabled={nickName.length <= 0}>건너뛰기</button>
    </S.Layout>
  );
};
