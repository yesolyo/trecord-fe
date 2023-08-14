import { Icon } from '@components/common/Icon';
import * as S from './style';

//TODO: 구글 로고 테두리를 없에야함
export const LoginButton = () => {
  const loginUri = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${
    import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID
  }&redirect_uri=${
    import.meta.env.VITE_REDIRECT_URI
  }&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`;

  const githubLoginHandler = () => {
    window.location.href = loginUri;
  };

  return (
    <S.Layout onClick={githubLoginHandler}>
      <Icon iconType="google" width={24} />
      <span>Google 계정으로 시작하기</span>
    </S.Layout>
  );
};
