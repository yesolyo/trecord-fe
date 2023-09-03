import styled from 'styled-components';

export const Layout = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  padding: 40px 20px 28px 20px;
  display: flex;
  top: 0;
  align-items: flex-end;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.colorStyles.gray100};
`;

export const CountBox = styled.span`
  ${({ theme }) => theme.colors.colorStyles.gray900};
  ${({ theme }) => theme.font.fontSize.Caption_S};
  ${({ theme }) => theme.font.fontType.S};
`;
