import { Icon } from '@components/common/Icon';
import * as S from './style';

interface navBarProfileProps {
  title: string;
  body?: string;
  filterText?: string;
  isButton?: boolean;
  onClick?: () => void;
}

export const NavBarProfile = ({
  title,
  body,
  filterText,
  isButton = false,
  onClick,
}: navBarProfileProps) => {
  return (
    <S.Layout>
      <S.BarBox>
        <S.TextBox>
          <span className="profile_main-title">{title}</span>
          <span className="profile_sub-title">{body}</span>
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
