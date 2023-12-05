import styled from 'styled-components';

export const Layout = styled.div`
  .line_thin {
    width: 390px;
    height: 2px;
    border: none;
    background: ${({ theme }) => theme.colors.colorStyles.gray300};
  }
`;
