import { styled } from 'styled-components';
interface buttonBoxProps {
  buttonWidth: string;
  buttonHeight: string;
  isDark: boolean;
}

export const ButtonBox = styled.button<buttonBoxProps>`
  ${({ theme }) => theme.font.fontType.M};
  ${({ theme }) => theme.font.fontSize.Button_M};
  color: ${({ theme, isDark }) =>
    isDark
      ? theme.colors.colorStyles.gray100
      : theme.colors.colorStyles.gray900};
  background: ${({ theme, isDark }) =>
    isDark
      ? theme.colors.colorStyles.gray900
      : theme.colors.colorStyles.gray100};
  width: ${({ buttonWidth }) => buttonWidth};
  height: ${({ buttonHeight }) => buttonHeight};
  border-radius: 8px;
  border: ${({ theme }) => theme.colors.colorStyles.gray900};
  &:disabled {
    background: ${({ theme }) => theme.colors.colorStyles.gray600};
  }
`;
