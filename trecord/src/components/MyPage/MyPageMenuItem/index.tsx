import { Icon } from '@components/common/Icon';
import * as S from './style';
import icons from '@/assets/index';
export interface mypageMenuProps {
  title: string;
  menuList: menuPorps[];
}
interface menuPorps {
  id: number;
  btnIcon?: keyof typeof icons;
  btnTitle: string;
  onClick?: () => void;
}

export const MyPageMenuItem = ({ title, menuList }: mypageMenuProps) => {
  return (
    <S.Layout>
      <S.TitleBox>{title}</S.TitleBox>
      {menuList.map((menu) => (
        <S.MenuBox key={menu.id} onClick={menu.onClick}>
          <S.MenuTitleBox>
            {menu.btnIcon && <Icon iconType={menu.btnIcon} width={24} />}
            <S.BtnTitleBox>{menu.btnTitle}</S.BtnTitleBox>
          </S.MenuTitleBox>
          <Icon iconType="arrowRight" width={24} />
        </S.MenuBox>
      ))}
    </S.Layout>
  );
};
