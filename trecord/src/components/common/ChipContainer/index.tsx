import { ReactElement } from 'react';

import Chip from './Chip';
import { User } from '@/types/user';
import * as S from './style';

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
    <S.Layout>
      {users.map((user) => (
        <Chip
          clickable={clickable}
          user={user}
          key={user.userId}
          onClick={onClick}
        />
      ))}
    </S.Layout>
  );
};

export default ChipContainer;
