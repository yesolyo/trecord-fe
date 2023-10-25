import styled from 'styled-components';
export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  padding-top: 100px;
  gap: 19px;
  overflow: auto;
  height: calc(100% - 110px);

  scrollbar-width: none;

  padding-bottom: 20px;
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
