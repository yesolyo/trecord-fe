import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
`;
export const TitleBox = styled.span`
  ${({ theme }) => theme.font.fontSize.Body_S};
  ${({ theme }) => theme.font.fontType.R};
  width: 350px;
`;
export const MenuBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 350px;
`;
export const MenuTitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`;
export const BtnTitleBox = styled.span`
  ${({ theme }) => theme.font.fontSize.Body_M};
  ${({ theme }) => theme.font.fontType.R};
`;
