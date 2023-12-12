import { useNavigate } from 'react-router-dom';
import { Icon } from '../../Icon';
import * as S from './style';
interface NavBarProps {
  totalPage?: number;
}
export const NavBarHome = ({ totalPage = 0 }: NavBarProps) => {
  const navigate = useNavigate();
  return (
    <S.Layout>
      <Icon
        iconType="trecordLogo"
        width={133}
        height={21}
        onClick={() => navigate('/home')}
      />
      <S.CountBox>총 게시글 {totalPage}개</S.CountBox>
    </S.Layout>
  );
};
