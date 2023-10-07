import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 342px;
  padding-top: 25px;
  ${({ theme }) => theme.font.fontSize.Body_M}
  ${({ theme }) => theme.font.fontType.R}
  img {
    object-fit: cover;
  }
`;
