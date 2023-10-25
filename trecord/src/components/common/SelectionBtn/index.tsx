import { colorStyles } from '@/styles/color';
import { Icon } from '../Icon';
import * as S from './style';
import icons from '@/assets/index';
export interface EmojiBtnProps {
  iconName: keyof typeof icons | string;
  textTitle?: string;
  activeBtn: string;
  isActive: boolean;
  activeSetBtn: React.Dispatch<React.SetStateAction<string>>;
}
export const SelectionBtn = ({
  iconName,
  textTitle,
  activeBtn,
  isActive,
  activeSetBtn,
}: EmojiBtnProps) => {
  return (
    <S.Layout
      isSelected={activeBtn === iconName}
      onClick={() => activeSetBtn(iconName)}
    >
      {!isActive || iconName in icons ? (
        <Icon
          iconType={iconName as keyof typeof icons}
          width={24}
          fill={
            activeBtn === iconName ? colorStyles.gray100 : colorStyles.gray600
          }
        />
      ) : null}

      {textTitle && <div className="text_emoji">{textTitle}</div>}
    </S.Layout>
  );
};
