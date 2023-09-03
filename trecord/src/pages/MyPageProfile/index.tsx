import { LoginProfileImg } from '@components/LoginProfile/LoginProfileImg';
import { LoginProfileName } from '@components/LoginProfile/LoginProfileName';
import { useEffect, useState } from 'react';
import * as S from './style';
import { LoginProfileIntroduce } from '@components/LoginProfile/LoginProfileIntroduce';
import { ProfileNewButton } from '@components/common/button/ProfileNewButton';
import { TabBar } from '@components/common/TabBar';
import { NavBarProfile } from '@components/common/NavBar/NavBarProfile';

export const MyPageProfile = () => {
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
  const getToken = localStorage.getItem('acessToken');

  useEffect(() => {
    if (getToken) {
      fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/users`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: getToken,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setProfilUrl(data.data.imageUrl);
          setNickName(data.data.nickname);
          setIntroduce(data.data.introduction);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <S.Layout>
      <NavBarProfile mainTitle="마이페이지" />
      <S.ProfileBox>
        <LoginProfileImg
          profileFile={setProfileFile}
          profileFileValue={profileFile}
          profileUrl={profileUrl}
        />
        <LoginProfileName
          nickNameValue={nickName}
          nickNameSetValue={setNickName}
        />
        <LoginProfileIntroduce
          introduceValue={introduce}
          introduceSetValue={setIntroduce}
        />
        <S.BtnBox>
          <ProfileNewButton
            imageFile={profileFile}
            saveImageUrl={setProfilUrl}
            imageUrl={profileUrl}
            nickNameValue={nickName}
            intrduceValue={introduce}
            title="변경하기"
          ></ProfileNewButton>
        </S.BtnBox>
      </S.ProfileBox>

      <TabBar currentPage="mypage" />
    </S.Layout>
  );
};
