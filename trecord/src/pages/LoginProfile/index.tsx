import { LoginProfileImg } from '@components/LoginProfile/LoginProfileImg';
import { LoginProfileName } from '@components/LoginProfile/LoginProfileName';
import { useState } from 'react';
import * as S from './style';
import { LoginProfileIntroduce } from '@components/LoginProfile/LoginProfileIntroduce';
import { NavBarProfile } from '@components/common/NavBar/NavBarProfile';
import { ProfileFileProps } from '@/types/mypage';
import { SquareBtn } from '@components/common/SquareBtn';
import { useNavigate } from 'react-router-dom';
import usePostNewUser from '@/apis/User/postNewUser';
import { uploadS3 } from '@/utils/image';

export const LoginProfile = () => {
  const navigate = useNavigate();
  const { mutate } = usePostNewUser();
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

  const handleSaveIntroduce = (s: string) => {
    setIntroduce(s);
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

  const handleClickRegisterNewUser = async (e: any) => {
    e.preventDefault();
    let url = '';
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
          navigate('/home');
        },
      },
    );
  };

  return (
    <>
      <NavBarProfile
        title="프로필"
        body="다른 사용자에게 보여지는 프로필을 설정해주세요"
      />
      <S.ProfileBox onSubmit={handleClickRegisterNewUser}>
        <LoginProfileImg
          onSaveProfileFile={handleSaveProfileFile}
          profileFile={profileFile}
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
    </>
  );
};
