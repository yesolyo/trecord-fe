import { Icon } from '../Icon';
import * as S from './style';
import icons from '@/assets/index';
interface NewBtnProps {
  type: keyof typeof icons;
  iconWidth: number;
  onClick?: () => void;
}
export const NewBtn = ({ type, iconWidth, onClick }: NewBtnProps) => {
  return (
    <S.Layout>
      <Icon iconType={type} width={iconWidth} onClick={onClick} />
    </S.Layout>
  );
};
