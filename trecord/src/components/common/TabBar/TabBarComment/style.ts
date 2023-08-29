import styled from 'styled-components';
interface buttonBoxProps {
  isDark: boolean;
}
interface inputBoxProps {
  isEdit: boolean;
}
export const Layout = styled.div`
  display: flex;
  width: 390px;
  height: 100px;
  position: fixed;
  justify-content: center;
  align-items: center;
  gap: 10px;
  bottom: 0;
  background: ${({ theme }) => theme.colors.colorStyles.gray100};
`;

export const InputBox = styled.input<inputBoxProps>`
  width: ${({ isEdit }) => (isEdit ? '210px' : '256px')};
  height: 48px;
  padding-left: 15px;
  border: 1px solid ${({ theme }) => theme.colors.colorStyles.gray300};
  border-radius: 8px;
`;

export const EditBox = styled.div`
  display: flex;
  gap: 1.5px;
`;
export const ButtonPrevBox = styled.button<buttonBoxProps>`
  width: 61px;
  height: 48px;
  border-radius: 8px 0 0 8px;
  border: none;
  color: ${({ theme, isDark }) =>
    isDark
      ? theme.colors.colorStyles.gray100
      : theme.colors.colorStyles.gray900};
  background: ${({ theme, isDark }) =>
    isDark
      ? theme.colors.colorStyles.gray900
      : theme.colors.colorStyles.gray100};
`;

export const ButtonNextBox = styled.button<buttonBoxProps>`
  width: 61px;
  height: 48px;
  border-radius: 0 8px 8px 0px;
  border: none;
  color: ${({ theme, isDark }) =>
    isDark
      ? theme.colors.colorStyles.gray100
      : theme.colors.colorStyles.gray900};
  background: ${({ theme, isDark }) =>
    isDark
      ? theme.colors.colorStyles.gray900
      : theme.colors.colorStyles.gray100};
`;
