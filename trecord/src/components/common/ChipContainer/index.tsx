import { ReactElement } from 'react';
import styled from 'styled-components';
import Chip from './Chip';
import { User } from '@/types/user';

const StyledContainer = styled.div``;

interface Props {
  clickable?: boolean;
  users: User[];
  onClick?: (user: User) => void;
}

const ChipContainer = ({
  clickable = false,
  users,
  onClick,
}: Props): ReactElement => {
  return (
    <StyledContainer>
      {users.map((user) => (
        <Chip
          clickable={clickable}
          user={user}
          key={user.userId}
          onClick={onClick}
        />
      ))}
    </StyledContainer>
  );
};

export default ChipContainer;
