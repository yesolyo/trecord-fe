import { ReactElement } from 'react';
import styled from 'styled-components';

const StyledChip = styled.div`
  margin: 2px 3px;
  display: inline-flex;
  padding: 6px 14px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border: 1px solid var(--Gray500, #b8b8b8);

  color: var(--Gray900, #1e1e1e);
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
`;

interface Props {
  name: string;
}
const Chip = ({ name }: Props): ReactElement => {
  return <StyledChip>{name}</StyledChip>;
};

export default Chip;
