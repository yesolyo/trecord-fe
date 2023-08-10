import { styled } from 'styled-components';
interface EmojiLayoutProps {
  isSelected: boolean;
}
export const Layout = styled.button<EmojiLayoutProps>`
  display: flex;
  width: 109px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.colorStyles.gray300};
  border-radius: 8px;
  background: ${({ theme, isSelected }) =>
    isSelected
      ? theme.colors.colorStyles.gray900
      : theme.colors.colorStyles.gray100};
  justify-content: center;
  align-items: center;
  .text_emoji {
    ${({ theme }) => theme.font.fontSize.Caption_S};
    ${({ theme }) => theme.font.fontType.R};
    margin-left: 5px;
    color: ${({ theme, isSelected }) =>
      isSelected
        ? theme.colors.colorStyles.gray100
        : theme.colors.colorStyles.gray900};
  }
`;
