import { ReactElement } from 'react';
import styled from 'styled-components';
import Chip from './Chip';

const StyledContainer = styled.div``;

interface Props {
  names: string[];
}

const ChipContainer = ({ names }: Props): ReactElement => {
  return (
    <StyledContainer>
      {names.map((name) => (
        <Chip name={name} />
      ))}
    </StyledContainer>
  );
};

export default ChipContainer;
