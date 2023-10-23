import { User } from '@/types/user';
import { ReactElement } from 'react';
import styled from 'styled-components';

type ChipPropType = {
  clickable: boolean;
};

const StyledChip = styled.button<ChipPropType>`
  margin: 2px 3px;
  display: inline-flex;
  padding: 6px 14px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.colors.colorStyles.gray500};
  background-color: ${({ theme }) => theme.colors.colorStyles.gray100};
  color: ${({ theme }) => theme.colors.colorStyles.gray900};
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */

  &:focus,
  &:hover {
    background-color: #f6f6f6;
  }
`;

interface Props {
  clickable?: boolean;
  user: User;
  onClick?: (user: User) => void;
}
const Chip = ({ clickable = false, user, onClick }: Props): ReactElement => {
  return (
    <StyledChip clickable={clickable} onClick={() => onClick?.(user)}>
      {user.nickname}
    </StyledChip>
  );
};

export default Chip;
