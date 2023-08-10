import { styled } from 'styled-components';
interface BtnBoxProps {
  boxWidth: string;
  boxHeight: string;
}

export const BtnBox = styled.button<BtnBoxProps>`
  ${({ theme }) => theme.font.fontType.M};
  ${({ theme }) => theme.font.fontSize.Button_M};
  color: ${({ theme }) => theme.colors.colorStyles.gray100};
  background: ${({ theme }) => theme.colors.colorStyles.gray900};
  width: ${({ boxWidth }) => boxWidth};
  height: ${({ boxHeight }) => boxHeight};
  border-radius: 8px;
  border: none;
`;
