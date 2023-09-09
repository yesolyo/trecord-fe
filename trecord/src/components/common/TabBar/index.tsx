import { colorStyles } from '@/styles/color';
import { Icon } from '../Icon';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

interface TabBarProps {
  currentPage: string;
}
export const TabBar = ({ currentPage }: TabBarProps) => {
  const navigate = useNavigate();

  return (
    <S.Layout>
      <S.menuBox type="button" onClick={() => navigate('/alarm')}>
        <Icon
          iconType="alarm"
          width={24}
          fill={
            currentPage === 'alarm' ? colorStyles.gray900 : colorStyles.gray600
          }
        />
        <S.menuNameBox isSlected={currentPage === 'alarm'}>알림</S.menuNameBox>
      </S.menuBox>
      <S.menuBox type="button" onClick={() => navigate('/home')}>
        <Icon
          iconType="book"
          width={24}
          fill={
            currentPage === 'home' ? colorStyles.gray900 : colorStyles.gray600
          }
        />
        <S.menuNameBox isSlected={currentPage === 'home'}>피드</S.menuNameBox>
      </S.menuBox>
      <S.menuBox type="button" onClick={() => navigate('/mypage')}>
        <Icon
          iconType="user"
          width={24}
          fill={
            currentPage === 'mypage' ? colorStyles.gray900 : colorStyles.gray600
          }
        />
        <S.menuNameBox isSlected={currentPage === 'mypage'}>
          마이페이지
        </S.menuNameBox>
      </S.menuBox>
    </S.Layout>
  );
};
