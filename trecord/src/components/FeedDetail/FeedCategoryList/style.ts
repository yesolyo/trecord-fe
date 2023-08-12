import { styled } from 'styled-components';

export const Layout = styled.div`
  width: 97px;
  height: 114px;
  background: ${({ theme }) => theme.colors.colorStyles.gray100};
  border-radius: 8px;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CancelBtnBox = styled.button`
  width: 97px;
  height: 38px;
  border-left: none;
  border-right: none;
  background: none;
  border-top: 1px solid ${({ theme }) => theme.colors.colorStyles.gray300};
  border-bottom: 1px solid ${({ theme }) => theme.colors.colorStyles.gray300};
  ${({ theme }) => theme.font.fontSize.Body_S};
`;

export const EditBtnBox = styled.button`
  width: 97px;
  height: 38px;
  border: none;
  background: none;
  ${({ theme }) => theme.font.fontType.R};
  ${({ theme }) => theme.font.fontSize.Body_S};
`;
export const ShareBtnBox = styled.button`
  width: 97px;
  height: 38px;
  border: none;
  background: none;
  ${({ theme }) => theme.font.fontType.R};
  ${({ theme }) => theme.font.fontSize.Body_S};
`;
