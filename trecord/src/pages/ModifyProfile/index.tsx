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
import { ProfileFileProps } from '@/types/mypage';

export const ModifyProfile = () => {
  const navigate = useNavigate();
  const [profileFile, setProfileFile] = useState<ProfileFileProps>({
    imgFile: '',
    originFile: '',
  });
  const [profileUrl, setProfilUrl] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [introduce, setIntroduce] = useState<string>('');
  const [isDuplicateNickname, setIsDuplicateNickname] =
    useState<boolean>(false);
  const [edit, setEdit] = useState(false);
  const { data } = useGetMyPageProfile();

  const handleCheckDuplicateNickname = (b: boolean) => {
    setIsDuplicateNickname(b);
  };

  const handleSaveNickname = (name: string) => {
    setNickname(name);
  };
  const handleSaveProfileFile = (file: ProfileFileProps) => {
    setProfileFile(file);
  };
  const handleClickEdit = (b: boolean) => {
    setEdit(b);
  };
  useEffect(() => {
    if (data) {
      setProfilUrl(data.imageUrl);
      setNickname(data.nickname);
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
          onSaveProfileFile={handleSaveProfileFile}
          profileFile={profileFile}
          profileUrl={profileUrl}
        />
        <LoginProfileName
          nickname={nickname}
          onSaveNickname={handleSaveNickname}
          onCheckDuplicateNickname={handleCheckDuplicateNickname}
          edit={edit}
          onClickEdit={handleClickEdit}
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
            nickname={nickname}
            intrduceValue={introduce}
            isDuplicateNickname={isDuplicateNickname}
            title="변경하기"
          ></ProfileNewButton>
        </S.BtnBox>
      </S.ProfileBox>

      <TabBar currentPage="mypage" />
    </>
  );
};
