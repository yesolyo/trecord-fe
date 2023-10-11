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
  flex-direction: column;
  margin-top: 20px;
  gap: 20px;
  width: 350px;
  margin-left: 20px;

  .profile_main-title {
    ${({ theme }) => theme.font.fontSize.Title_BL}
    ${({ theme }) => theme.font.fontType.B}
  }
`;
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  width: 350px;

  .profile_main-title {
    ${({ theme }) => theme.font.fontSize.Title_BL}
    ${({ theme }) => theme.font.fontType.B}
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
  background:none;
  border: none;
  display: flex;
  align-items: center;
  gap: 3px;
`;
