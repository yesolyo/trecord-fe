import styled from 'styled-components';

export const Layout = styled.form`
  height: calc(100% - 200px);
  padding-top: 80px;
  overflow: auto;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  .line_thick {
    width: 390px;
    height: 10px;
    border: none;
    background: ${({ theme }) => theme.colors.colorStyles.gray300};
  }
`;
