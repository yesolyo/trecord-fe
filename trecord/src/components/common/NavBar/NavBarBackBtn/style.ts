import { styled } from 'styled-components';

export const Layout = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  height: 70px;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  gap: 110px;
  padding-left: 20px;
  /* padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px; */
  background: ${({ theme }) => theme.colors.colorStyles.gray100};
`;

export const TitleBox = styled.span`
  ${({ theme }) => theme.colors.colorStyles.gray900};
  ${({ theme }) => theme.font.fontSize.Title_M};
  ${({ theme }) => theme.font.fontType.S};
`;
