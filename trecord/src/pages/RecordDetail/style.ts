import styled from 'styled-components';

export const Layout = styled.div``;

export const DataBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding-top: 65px;

  .loading {
    width: 100%;
    padding: 0px 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 10px;

    hr {
      width: 100%;
      border-top: 1px solid #e9e9e9;
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
