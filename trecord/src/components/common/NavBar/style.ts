import { styled } from 'styled-components';

export const Layout = styled.div`
  display: flex;
  position: fixed;
  width: 330px;
  height: 80px;
  align-items: flex-end;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
  background: ${({ theme }) => theme.colors.colorStyles.gray100};
`;

export const CountBox = styled.span`
  ${({ theme }) => theme.colors.colorStyles.gray900};
  ${({ theme }) => theme.font.fontSize.Caption_S};
  ${({ theme }) => theme.font.fontType.S};
`;
