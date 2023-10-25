import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;

  span {
    ${({ theme }) => theme.font.fontSize.Body_S}
    ${({ theme }) => theme.font.fontType.R}
    margin-bottom:5px;
  }

  .list-box {
    display: flex;
    gap: 5px;
  }
`;
