import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  gap: 20px;
  width: 310px;
  justify-content: space-between;
  padding-bottom: 10px;
  padding-top: 10px;
  .text_box {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .content_box {
    ${({ theme }) => theme.font.fontSize.Body_S}
    ${({ theme }) => theme.font.fontType.R}
  }
  .date_box {
    ${({ theme }) => theme.font.fontSize.Caption_S}
    ${({ theme }) => theme.font.fontType.R}
  color: ${({ theme }) => theme.colors.colorStyles.gray600};
  }
`;
