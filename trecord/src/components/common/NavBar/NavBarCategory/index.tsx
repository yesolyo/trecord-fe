import { Icon } from '@components/common/Icon';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { colorStyles } from '@/styles/color';
export const NavBarCategory = () => {
  const navigation = useNavigate();
  return (
    <S.Layout>
      <Icon
        iconType="arrow"
        width={24}
        onClick={() => navigation('/home')}
        fill={colorStyles.gray900}
      />
      <Icon iconType="more" width={24} />
    </S.Layout>
  );
};
