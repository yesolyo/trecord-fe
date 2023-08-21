import { styled } from 'styled-components';
interface iconTagBoxProps {
  isActive: boolean;
  width: string;
  height: string;
}
export const IconTagBox = styled.button<iconTagBoxProps>`
  display: flex;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: 1px solid ${({ theme }) => theme.colors.colorStyles.gray300};
  border-radius: 8px;
  background: ${({ theme, isActive }) =>
    isActive
      ? theme.colors.colorStyles.gray900
      : theme.colors.colorStyles.gray100};
  justify-content: center;
  align-items: center;

  .text_icon {
    ${({ theme }) => theme.font.fontSize.Caption_S};
    ${({ theme }) => theme.font.fontType.R};
    margin-left: 5px;
    color: ${({ theme, isActive }) =>
      isActive
        ? theme.colors.colorStyles.gray100
        : theme.colors.colorStyles.gray900};
  }
`;
