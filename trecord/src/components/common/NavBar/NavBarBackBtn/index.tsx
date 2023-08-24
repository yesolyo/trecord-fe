import * as S from './style';
import { Icon } from '@components/common/Icon';
import { colorStyles } from '@/styles/color';
interface NavBarBackBtnProps {
  isCategory: boolean;
  onBackBtnClick?: () => void;
  onCategoryClick?: () => void;
}
export const NavBarBackBtn = ({
  isCategory,
  onBackBtnClick,
  onCategoryClick,
}: NavBarBackBtnProps) => {
  const constant = {
    backBtn: {
      width: 24,
      fill: isCategory ? colorStyles.gray900 : colorStyles.gray100,
      onClick: onBackBtnClick,
    },
    categoryBtn: {
      width: 24,
      fill: isCategory ? colorStyles.gray900 : colorStyles.gray100,
      onClick: onCategoryClick,
    },
  };

  return (
    <S.Layout>
      <Icon iconType="arrow" {...constant.backBtn} />
      {isCategory && <Icon iconType="more" {...constant.categoryBtn} />}
    </S.Layout>
  );
};
