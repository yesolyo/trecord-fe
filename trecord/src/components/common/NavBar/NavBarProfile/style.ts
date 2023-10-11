import styled from 'styled-components';
export const Layout = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 50;
  background: ${({ theme }) => theme.colors.colorStyles.gray100};
`;
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;

  .profile_main-title {
    ${({ theme }) => theme.font.fontSize.Title_BL}
    ${({ theme }) => theme.font.fontType.B}
  }
  .profile_sub-title {
    ${({ theme }) => theme.font.fontSize.Body_S}
    ${({ theme }) => theme.font.fontType.R}
  }
`;
export const BarBox = styled.div`
  margin-top: 50px;
  display: flex;
  width: 350px;
  justify-content: space-between;
`;
export const ButtonBox = styled.button`
  ${({ theme }) => theme.font.fontSize.Caption_S}
  ${({ theme }) => theme.font.fontType.M}
  color: ${({ theme }) => theme.colors.colorStyles.gray900};
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 3px;
`;
