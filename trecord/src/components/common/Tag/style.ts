import { styled } from 'styled-components';

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.colorStyles.gray500};
  border-radius: 100px;
  width: 60px;
  height: 30px;
  ${({ theme }) => theme.font.fontSize.Caption_S}
  ${({ theme }) => theme.font.fontType.R};
`;
