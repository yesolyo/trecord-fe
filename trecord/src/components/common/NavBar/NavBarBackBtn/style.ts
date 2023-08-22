import styled from 'styled-components';
interface NavBarBackProps {
  isRegister: boolean;
}
export const Layout = styled.div<NavBarBackProps>`
  display: flex;
  position: fixed;
  top: 0;
  height: 70px;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  gap: 110px;
  padding-left: 20px;
`;

export const TitleBox = styled.span`
  ${({ theme }) => theme.colors.colorStyles.gray900};
  ${({ theme }) => theme.font.fontSize.Title_M};
  ${({ theme }) => theme.font.fontType.S};
`;

export const SaveBox = styled.button`
  border: none;
  background: none;
  ${({ theme }) => theme.font.fontSize.Button_M};
  ${({ theme }) => theme.font.fontType.M};
  &:disabled {
    ${({ theme }) => theme.colors.colorStyles.gray900};
  }
`;
