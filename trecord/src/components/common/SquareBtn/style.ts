import styled from 'styled-components';
import { Size } from '.';
const SIZES: {
  [key in Size]: {
    padding: string;
  };
} = {
  s: {
    padding: '12px 4.3% ',
  },
  m: {
    padding: '16px 38.2% ',
  },
  l: {
    padding: '16px 42%',
  },
};
interface Props {
  isDark: boolean;
  size: Size;
}

export const Layout = styled.button<Props>`
  ${({ theme }) => theme.font.fontType.M};
  ${({ theme }) => theme.font.fontSize.Button_M};
  ${({ size }) => SIZES[size]};
  color: ${({ theme, isDark }) =>
    isDark
      ? theme.colors.colorStyles.gray100
      : theme.colors.colorStyles.gray900};
  background: ${({ theme, isDark }) =>
    isDark
      ? theme.colors.colorStyles.gray900
      : theme.colors.colorStyles.gray100};
  border-radius: 8px;
  border: ${({ theme }) => theme.colors.colorStyles.gray900};
  &:disabled {
    background: ${({ theme }) => theme.colors.colorStyles.gray600};
  }
`;
