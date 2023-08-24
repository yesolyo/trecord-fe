import { Icon } from '@components/common/Icon';
import * as S from './style';
import icons from '@/assets/index';
import { colorStyles } from '@/styles/color';
interface iconTagButtonProps {
  iconType: keyof typeof icons;
  iconWidth?: number;
  iconHeight?: number;
  title?: string;
  width: string;
  height: string;
  buttonValue: string;
  buttonState: React.Dispatch<React.SetStateAction<string>>;
}
export const IconTagButton = ({
  iconType,
  iconWidth = 24,
  iconHeight,
  title,
  width,
  height,
  buttonValue,
  buttonState,
}: iconTagButtonProps) => {
  return (
    <S.IconTagBox
      isActive={buttonValue === iconType}
      onClick={() => buttonState(iconType)}
      width={width}
      height={height}
    >
      <Icon
        iconType={iconType}
        width={iconWidth}
        height={iconHeight}
        fill={
          buttonValue === iconType ? colorStyles.gray100 : colorStyles.gray600
        }
      />
      {title && <div className="text_icon">{title}</div>}
    </S.IconTagBox>
  );
};
