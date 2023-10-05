import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  .container {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    .day {
      padding-top: 3px;
      ${({ theme }) => theme.font.fontSize.Caption_M}
      ${({ theme }) => theme.font.fontType.M}
    }
  }
  .circle-line {
    padding-top: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .v-line {
    border-left: 1px solid;
    height: 50px;
  }
  .item {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 15px;
  }
  .place {
    ${({ theme }) => theme.font.fontSize.Body_M}
    ${({ theme }) => theme.font.fontType.R}
  }
`;
