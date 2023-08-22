import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  width: 342px;
  padding-top: 25px;
  ${({ theme }) => theme.font.fontSize.Body_M}
  ${({ theme }) => theme.font.fontType.R}
`;
