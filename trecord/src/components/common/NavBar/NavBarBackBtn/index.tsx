import { useNavigate } from 'react-router-dom';
import * as S from './style';
import { Icon } from '@components/common/Icon';
import { colorStyles } from '@/styles/color';
interface NavBarBackBtnProps {
  title?: string;
  isDark: boolean;
}
export const NavBarBackBtn = ({ title, isDark }: NavBarBackBtnProps) => {
  const navigate = useNavigate();
  return (
    <S.Layout>
      <Icon
        iconType="arrow"
        width={24}
        fill={isDark ? colorStyles.gray900 : colorStyles.gray100}
        onClick={() => navigate('/home')}
      />
      <S.TitleBox>{title}</S.TitleBox>
    </S.Layout>
  );
};
