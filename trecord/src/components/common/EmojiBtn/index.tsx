import { colorStyles } from '@/styles/color';
import { Icon } from '../Icon';
import * as S from './style';
import icons from '@/assets/index';
interface EmojiBtnProps {
  iconName: keyof typeof icons;
  textTitle: string;
  activeBtn: string;
  activeSetBtn: React.Dispatch<React.SetStateAction<string>>;
}
export const EmojiBtn = ({
  iconName,
  textTitle,
  activeBtn,
  activeSetBtn,
}: EmojiBtnProps) => {
  return (
    <S.Layout
      isSelected={activeBtn === iconName}
      onClick={() => activeSetBtn(iconName)}
    >
      <Icon
        iconType={iconName}
        width={24}
        fill={
          activeBtn === iconName ? colorStyles.gray100 : colorStyles.gray600
        }
      />
      <div className="text_emoji">{textTitle}</div>
    </S.Layout>
  );
};
