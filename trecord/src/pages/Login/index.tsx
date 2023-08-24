import { LoginButton } from '@components/LoginButton';
import { Icon } from '@components/common/Icon';
import * as S from './style';

export const Login = () => {
  const constant = {
    width: 133,
    height: 21,
  };
  return (
    <S.Layout>
      <S.LogoBox>
        <Icon iconType="trecordLogo" {...constant} />
      </S.LogoBox>
      <LoginButton />
    </S.Layout>
  );
};
