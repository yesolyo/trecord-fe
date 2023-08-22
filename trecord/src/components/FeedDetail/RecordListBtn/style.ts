import styled from 'styled-components';
interface LayoutProps {
  isActive: boolean;
}
export const Layout = styled.button<LayoutProps>`
  width: 162px;
  height: 44px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.colorStyles.gray900};
  color: ${({ theme, isActive }) =>
    isActive
      ? theme.colors.colorStyles.gray100
      : theme.colors.colorStyles.gray900};
  background: ${({ theme, isActive }) =>
    isActive
      ? theme.colors.colorStyles.gray900
      : theme.colors.colorStyles.gray100};
`;
