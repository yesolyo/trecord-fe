import styled from 'styled-components';
export const Layout = styled.button`
  ${({ theme }) => theme.font.fontSize.Caption_S}
  ${({ theme }) => theme.font.fontType.R};
  background: none;
  border: none;
  display: flex;
  padding: 0;
`;
