import styled from 'styled-components';

export const Layout = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding-top: 90px;
  padding-bottom: 100px;
  width: 100%;
  height: calc(100% - 190px);
  overflow: auto;

  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }

  .line {
    width: 390px;
    border: 1px solid ${({ theme }) => theme.colors.colorStyles.gray300};
    text-align: left;
    margin-left: 0;
    background: ${({ theme }) => theme.colors.colorStyles.gray300};
  }
`;
