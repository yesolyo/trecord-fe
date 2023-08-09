import { styled } from 'styled-components';

export const Layout = styled.div`
  display: flex;
  width: 330px;
  height: 80px;
  align-items: flex-end;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
`;

export const CountBox = styled.span`
  ${({ theme }) => theme.colors.colorStyles.gray900};
  ${({ theme }) => theme.font.fontSize.Caption_S};
  ${({ theme }) => theme.font.fontType.S};
`;
