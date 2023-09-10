import { Icon } from '@components/common/Icon';
import * as S from './style';

interface navBarProfileProps {
  mainTitle: string;
  subTitle?: string;
  filterText: string;
  isButton?: boolean;
  onClick?: () => void;
}

export const NavBarProfile = ({
  mainTitle,
  subTitle,
  filterText,
  isButton = false,
  onClick,
}: navBarProfileProps) => {
  return (
    <S.Layout>
      <S.BarBox>
        <S.TextBox>
          <span className="profile_main-title">{mainTitle}</span>
          <span className="profile_sub-title">{subTitle}</span>
        </S.TextBox>
        {isButton && (
          <S.ButtonBox onClick={onClick}>
            {filterText}
            <Icon iconType="arrowDown" />
          </S.ButtonBox>
        )}
      </S.BarBox>
    </S.Layout>
  );
};
