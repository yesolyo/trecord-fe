import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  padding-top: 50px;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  align-items: center;
  height: calc(100vh - 190px);
  overflow: auto;

  .container {
    display: flex;
    gap: 20px;
    width: 350px;
    .content {
      display: flex;
      flex-direction: column;
      gap: 5px;
      width: 264px;
      .title {
        ${({ theme }) => theme.font.fontSize.Body_M};
        ${({ theme }) => theme.font.fontType.R};
      }
      .date {
        ${({ theme }) => theme.font.fontSize.Caption_S};
        ${({ theme }) => theme.font.fontType.R};
        color: ${({ theme }) => theme.colors.colorStyles.gray600};
      }
    }
  }
`;

export const LineBox = styled.hr`
  width: 390px;
  height: 1px;
  border: none;
  background: ${({ theme }) => theme.colors.colorStyles.gray300};
`;
