import { styled } from 'styled-components';

export const BtnBox = styled.button`
  ${({ theme }) => theme.font.fontType.M};
  ${({ theme }) => theme.font.fontSize.Button_M};
  color: ${({ theme }) => theme.colors.colorStyles.gray100};
  background: ${({ theme }) => theme.colors.colorStyles.gray900};
  width: 342px;
  height: 56px;
  border-radius: 8px;
  border: none;
  &:disabled {
    background: ${({ theme }) => theme.colors.colorStyles.gray600};
  }
`;
