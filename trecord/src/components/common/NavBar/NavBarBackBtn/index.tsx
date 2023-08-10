import { useNavigate } from 'react-router-dom';
import * as S from './style';
import { Icon } from '@components/common/Icon';
interface NavBarBackBtnProps {
  title: string;
}
export const NavBarBackBtn = ({ title }: NavBarBackBtnProps) => {
  const navigate = useNavigate();
  return (
    <S.Layout>
      <Icon iconType="arrow" width={24} onClick={() => navigate('/home')} />
      <S.TitleBox>{title}</S.TitleBox>
    </S.Layout>
  );
};
