import { colorStyles } from '@/styles/color';
import { Icon } from '@components/common/Icon';
import icons from '@/assets/index';
import * as S from './style';
interface circularButtonProps {
  iconType: keyof typeof icons;
  width?: number;
  height?: number;
  onClick?: () => void;
}

export const CircularButton = ({
  iconType,
  onClick,
  width = 24,
  height = 24,
}: circularButtonProps) => {
  return (
    <S.IconButtonBox onClick={onClick}>
      <Icon
        iconType={iconType}
        width={width}
        height={height}
        fill={colorStyles.gray900}
      />
    </S.IconButtonBox>
  );
};
