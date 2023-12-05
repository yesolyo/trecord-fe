import { LoginProfileImg } from '@components/LoginProfile/LoginProfileImg';
import { LoginProfileName } from '@components/LoginProfile/LoginProfileName';
import { useState } from 'react';
import * as S from './style';
import { LoginProfileIntroduce } from '@components/LoginProfile/LoginProfileIntroduce';
import { NavBarProfile } from '@components/common/NavBar/NavBarProfile';
import { SquareBtn } from '@components/common/SquareBtn';
import { useNavigate } from 'react-router-dom';
import useNewUserMutation from '@/apis/User/useNewUserMutation';

export const LoginProfile = () => {
  const navigate = useNavigate();
  const { mutate } = useNewUserMutation();
  const [profileImgUrl, setProfileImgUrl] = useState('');
  const [nickname, setNickname] = useState<string>('');
  const [introduce, setIntroduce] = useState<string>('');
  const [isDuplicateNickname, setIsDuplicateNickname] = useState<boolean>(true);

  const handleSaveProfileImgUrl = (url: string) => {
    setProfileImgUrl(url);
  };

  const handleSaveIntroduce = (s: string) => {
    setIntroduce(s);
  };

  const handleIsDuplicateNickname = (b: boolean) => {
    setIsDuplicateNickname(b);
  };

  const handleSaveNickname = (name: string) => {
    setNickname(name);
  };

  const handleClickRegisterNewUser = async (e: any) => {
    e.preventDefault();
    mutate(
      {
        nickname,
        imageUrl: profileImgUrl,
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
          onSaveProfileImgUrl={handleSaveProfileImgUrl}
          profileImgUrl={profileImgUrl}
        />
        <LoginProfileName
          nickname={nickname}
          onSaveNickname={handleSaveNickname}
          onIsDuplicateNickname={handleIsDuplicateNickname}
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
