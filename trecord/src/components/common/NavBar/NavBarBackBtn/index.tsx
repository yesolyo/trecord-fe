import { useNavigate } from 'react-router-dom';
import * as S from './style';
import { Icon } from '@components/common/Icon';
import { colorStyles } from '@/styles/color';

interface NavBarBackBtnProps {
  title?: string;
  isDark: boolean;
  isRegister: boolean;
  disabled?: boolean;
  registerClick?: () => void;
}
export const NavBarBackBtn = ({
  title,
  isDark,
  isRegister,
  disabled,
  registerClick,
}: NavBarBackBtnProps) => {
  const navigate = useNavigate();
  return (
    <S.Layout isRegister={isRegister}>
      <Icon
        iconType="arrow"
        width={24}
        fill={isDark ? colorStyles.gray900 : colorStyles.gray100}
        onClick={() => navigate('/home')}
      />
      <S.TitleBox>{title}</S.TitleBox>
      {isRegister && (
        <S.SaveBox disabled={disabled} onClick={registerClick}>
          등록
        </S.SaveBox>
      )}
    </S.Layout>
  );
};
