import styled from 'styled-components';

export const CircleBox = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.colorStyles.gray900};
`;
