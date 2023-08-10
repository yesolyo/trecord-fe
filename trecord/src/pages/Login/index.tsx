import { LoginButton } from '@components/LoginButton';
import { Icon } from '@components/common/Icon';
import * as S from './style';

export const Login = () => {
  return (
    <S.Layout>
      <S.LogoBox>
        <Icon iconType="trecordLogo" width={133} height={21} />
      </S.LogoBox>
      <LoginButton />
    </S.Layout>
  );
};
