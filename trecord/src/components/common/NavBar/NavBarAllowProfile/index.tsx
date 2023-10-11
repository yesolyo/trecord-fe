import { Icon } from '@components/common/Icon';
import * as S from './style';

interface navBarProfileProps {
  mainTitle: string;
  onClick?: () => void;
}

export const NavBarAllowProfile = ({
  mainTitle,
  onClick,
}: navBarProfileProps) => {
  return (
    <S.Layout>
      <Icon iconType="arrow" width={24} fill="black" onClick={onClick} />
      <span className="profile_main-title">{mainTitle}</span>
    </S.Layout>
  );
};
