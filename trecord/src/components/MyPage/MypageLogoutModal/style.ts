import styled from 'styled-components';

export const Layout = styled.div`
  width: 286px;
  height: 161px;
  background: ${({ theme }) => theme.colors.colorStyles.gray100};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  flex-direction: column;
  gap: 25px;
  span {
    ${({ theme }) => theme.font.fontSize.Title_S}
    ${({ theme }) => theme.font.fontType.S}
  }
`;

export const BtnBox = styled.div`
  display: flex;
  gap: 10px;
`;
export const CancelBtnBox = styled.button`
  width: 113px;
  height: 41px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.colorStyles.gray100};
  border: 1px solid;
  ${({ theme }) => theme.font.fontSize.Button_M}
  ${({ theme }) => theme.font.fontType.M}
`;
export const LogoutBtnBox = styled.button`
  width: 113px;
  height: 41px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.colorStyles.gray900};
  border: 1px solid;
  color: ${({ theme }) => theme.colors.colorStyles.gray100};
  ${({ theme }) => theme.font.fontSize.Button_M}
  ${({ theme }) => theme.font.fontType.M}
`;
