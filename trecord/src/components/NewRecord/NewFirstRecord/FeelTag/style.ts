import { styled } from 'styled-components';
interface EmojiLayoutProps {
  isSelected: boolean;
  width: string;
  height: string;
}
export const Layout = styled.button<EmojiLayoutProps>`
  display: flex;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: 1px solid
    ${({ theme, isSelected }) =>
      isSelected
        ? theme.colors.colorStyles.gray900
        : theme.colors.colorStyles.gray300};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.colorStyles.gray100};
  justify-content: center;
  align-items: center;
  color: ${({ theme, isSelected }) =>
    isSelected
      ? theme.colors.colorStyles.gray900
      : theme.colors.colorStyles.gray600};
`;
