import styled from 'styled-components';
interface Props {
  select: boolean;
}
export const Layout = styled.li<Props>`
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: center;

  .comment-user {
    display: flex;
    gap: 25px;
    background: ${({ theme, select }) =>
      select
        ? theme.colors.colorStyles.gray200
        : theme.colors.colorStyles.gray100};
    &:hover {
      background: ${({ theme }) => theme.colors.colorStyles.gray200};
    }
  }
  .comment-arrow {
    width: 15px;
    height: 15px;
    border-bottom: 1.5px solid
      ${({ theme }) => theme.colors.colorStyles.gray600};
    border-left: 1.5px solid ${({ theme }) => theme.colors.colorStyles.gray600};
  }

  .comment-user__image {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }
  .comment-content-box {
    display: flex;
    flex-direction: column;
    gap: 5px;

    .comment-content__title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      ${({ theme }) => theme.font.fontSize.Body_M}
      ${({ theme }) => theme.font.fontType.S};
    }
    .comment-content {
      ${({ theme }) => theme.font.fontSize.Body_S}
      ${({ theme }) => theme.font.fontType.R}
    display: inline-block;
      width: 280px;
      word-wrap: break-word;
    }
    .content__date {
      color: ${({ theme }) => theme.colors.colorStyles.gray600};
      ${({ theme }) => theme.font.fontSize.Caption_S}
      ${({ theme }) => theme.font.fontType.R};
    }
  }
`;
