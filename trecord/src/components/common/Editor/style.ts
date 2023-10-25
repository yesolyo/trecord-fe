import styled from 'styled-components';
export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 85vh;

  .ql-toolbar {
    border: 1px solid ${({ theme }) => theme.colors.colorStyles.gray300};
    border-right: none;
    border-left: none;
    display: inline-flex;
    justify-content: end;

    width: 100%;
    @media (min-width: 431px) {
      width: 390px;
    }
    background: ${({ theme }) => theme.colors.colorStyles.gray100};
    z-index: 1;
    height: 42px;
    position: fixed;
  }

  .ql-container {
    border: none;
    padding-top: 42px;
    height: 75vh;
    overflow: auto;

    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  .ql-editor::before {
    color: ${({ theme }) => theme.colors.colorStyles.gray600};
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
`;
