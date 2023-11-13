import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  gap: 25px;
  .user-img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }

  .title-box {
    display: flex;
    align-items: center;
    width: 288px;
    justify-content: space-between;
  }
  .content_box {
    display: flex;
    flex-direction: column;
    gap: 5px;

    .title-box {
      ${({ theme }) => theme.font.fontSize.Body_M}
      ${({ theme }) => theme.font.fontType.S}
    }
    .content {
      ${({ theme }) => theme.font.fontSize.Body_S}
      ${({ theme }) => theme.font.fontType.R}
    display: inline-block;
      width: 280px;
      word-wrap: break-word;
    }
    .content_date {
      color: ${({ theme }) => theme.colors.colorStyles.gray600};
      ${({ theme }) => theme.font.fontSize.Caption_S}
      ${({ theme }) => theme.font.fontType.R};
    }
  }
`;
