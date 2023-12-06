import styled from 'styled-components';

export const Layout = styled.div`
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100% - 80px);
  overflow: auto;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  .line {
    width: 390px;
    border: 1px solid ${({ theme }) => theme.colors.colorStyles.gray300};
    background: none;
  }
`;
