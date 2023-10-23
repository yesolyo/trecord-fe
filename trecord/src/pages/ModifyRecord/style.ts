import styled from 'styled-components';
export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
  overflow: auto;
  padding: 0px 20px;
  box-sizing: border-box;

  padding-top: 100px;
  gap: 19px;
  @media (min-width: 431px) {
    height: calc(844px - 120px);
  }
  width: 100%;
  scrollbar-width: none;
  align-items: center;
  padding-bottom: 20px;
  height: calc(100% - 10px);
  ::-webkit-scrollbar {
    display: none;
  }
  .new_feel {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 356px;
    gap: 15px;
  }
  .new_btn {
    padding-top: 30px;
  }
`;
