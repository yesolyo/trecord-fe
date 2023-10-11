import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  padding-top: 100px;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  align-items: center;
  height: calc(100% - 200px);
  overflow: auto;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }

  .container {
    display: flex;
    gap: 20px;
    width: 350px;
    .content {
      display: flex;
      flex-direction: column;
      gap: 5px;
      width: 264px;
      .nickname {
        ${({ theme }) => theme.font.fontSize.Body_M};
        ${({ theme }) => theme.font.fontType.S};
      }
      .title {
        ${({ theme }) => theme.font.fontSize.Body_M};
        ${({ theme }) => theme.font.fontType.R};
      }
      .body {
        ${({ theme }) => theme.font.fontSize.Body_S};
        ${({ theme }) => theme.font.fontType.R};
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        width: 264px;
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
