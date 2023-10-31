import styled from 'styled-components';

export const Layout = styled.button`
  ${({ theme }) => theme.font.fontType.M};
  ${({ theme }) => theme.font.fontSize.Button_M};
  color: ${({ theme }) => theme.colors.colorStyles.gray100};
  background: ${({ theme }) => theme.colors.colorStyles.gray900};
  padding: 16px 38.2% 16px 38.2%;
  border-radius: 8px;
  border: none;
  &:disabled {
    background: ${({ theme }) => theme.colors.colorStyles.gray600};
  }
`;
