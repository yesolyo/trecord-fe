import { User } from '@/types/user';
import { ReactElement } from 'react';
import * as S from './style';
interface Props {
  clickable?: boolean;
  user: User;
  onClick?: (user: User) => void;
}
const Chip = ({ clickable = false, user, onClick }: Props): ReactElement => {
  return (
    <S.ChipBtnBox clickable={clickable} onClick={() => onClick?.(user)}>
      {user.nickname}
    </S.ChipBtnBox>
  );
};

export default Chip;
