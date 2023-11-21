import styled from 'styled-components';
interface Props {
  select: boolean;
}
export const Layout = styled.div<Props>`
  display: flex;
  gap: 25px;
  background: ${({ theme, select }) =>
    select && theme.colors.colorStyles.gray200};
  &:hover {
    background: ${({ theme }) => theme.colors.colorStyles.gray200};
  }
  .title-box {
    display: flex;
    align-items: center;
    width: 250px;
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
      width: 200px;
      word-wrap: break-word;
    }
    .content_date {
      color: ${({ theme }) => theme.colors.colorStyles.gray600};
      ${({ theme }) => theme.font.fontSize.Caption_S}
      ${({ theme }) => theme.font.fontType.R};
    }
  }
`;
