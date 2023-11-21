import { LoginProfileImg } from '@components/LoginProfile/LoginProfileImg';
import { LoginProfileName } from '@components/LoginProfile/LoginProfileName';
import { useEffect, useState } from 'react';
import * as S from './style';
import { LoginProfileIntroduce } from '@components/LoginProfile/LoginProfileIntroduce';
import { MainTabBar } from '@components/common/TabBar/MainTabBar';
import { NavBarAllowProfile } from '@components/common/NavBar/NavBarAllowProfile';
import { useNavigate } from 'react-router-dom';
import useGetMyPageProfile from '@/apis/MyPage/getMyPageProfil';
import { ProfileFileProps } from '@/types/mypage';
import { SquareBtn } from '@components/common/SquareBtn';
import { uploadS3 } from '@/utils/image';
import usePostNewUser from '@/apis/User/postNewUser';

export const ModifyProfile = () => {
  const navigate = useNavigate();
  const { mutate } = usePostNewUser();
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
  const handleSaveIntroduce = (s: string) => {
    setIntroduce(s);
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

  const handleClickRegisterNewUser = async (e: any) => {
    e.preventDefault();
    let url = data?.imageUrl;
    if (profileFile.originFile) {
      try {
        url = (await uploadS3({ imageFile: profileFile.originFile })) ?? '';
      } catch (e) {
        console.error(e);
      }
    }

    mutate(
      {
        nickname,
        imageUrl: url,
        introduction: introduce,
      },
      {
        onSuccess: () => {
          navigate('/mypage', { replace: true });
        },
      },
    );
  };

  return (
    <>
      <NavBarAllowProfile
        mainTitle="마이페이지"
        onClick={() => navigate('/mypage')}
      />
      <S.ProfileBox onSubmit={handleClickRegisterNewUser}>
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
          introduce={introduce}
          onSaveIntroduce={handleSaveIntroduce}
        />
        <SquareBtn
          type="submit"
          title="시작하기"
          disabled={isDuplicateNickname}
        />
      </S.ProfileBox>
      <MainTabBar currentPage="mypage" />
    </>
  );
};
