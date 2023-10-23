import { LoginProfileImg } from '@components/LoginProfile/LoginProfileImg';
import { LoginProfileName } from '@components/LoginProfile/LoginProfileName';
import { useEffect, useState } from 'react';
import * as S from './style';
import { LoginProfileIntroduce } from '@components/LoginProfile/LoginProfileIntroduce';
import { ProfileNewButton } from '@components/common/button/ProfileNewButton';
import { TabBar } from '@components/common/TabBar';
import { NavBarAllowProfile } from '@components/common/navBar/NavBarAllowProfile';
import { useNavigate } from 'react-router-dom';
import useGetMyPageProfile from '@/apis/MyPage/getMyPageProfil';

export const ModifyProfile = () => {
  const navigate = useNavigate();
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
  const { data } = useGetMyPageProfile();

  useEffect(() => {
    if (data) {
      setProfilUrl(data.imageUrl);
      setNickName(data.nickname);
      setIntroduce(data.introduction);
    }
  }, [data]);

  return (
    <>
      <NavBarAllowProfile
        mainTitle="마이페이지"
        onClick={() => navigate('/mypage')}
      />
      <S.ProfileBox>
        <LoginProfileImg
          profileFile={setProfileFile}
          profileFileValue={profileFile}
          profileUrl={profileUrl}
        />
        <LoginProfileName
          nickNameValue={nickName}
          userNicknameData={data?.nickname}
          nickNameSetValue={setNickName}
          setIsNickName={setIsNickName}
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
            isNickName={isNickName}
            title="변경하기"
          ></ProfileNewButton>
        </S.BtnBox>
      </S.ProfileBox>

      <TabBar currentPage="mypage" />
    </>
  );
};
