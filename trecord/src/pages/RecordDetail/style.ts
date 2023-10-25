import styled from 'styled-components';

export const Layout = styled.div``;

export const DataBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding-top: 65px;
  height: calc(100% - 150px);
  overflow: auto;

  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  .loading {
    width: 100%;
    padding: 0px 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 10px;

    hr {
      width: 100%;
      border-top: 1px solid ${({ theme }) => theme.colors.colorStyles.gray300};
    }

    .loading-title-area {
      div {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      display: flex;
      .title {
        flex: 1;
      }
      .content {
        flex: 2;
      }
    }
  }
`;
