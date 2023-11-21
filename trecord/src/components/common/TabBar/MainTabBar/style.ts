import styled from 'styled-components';

interface ItemNamePrps {
  isSlected: boolean;
}
export const Layout = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 92px;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.12);
  border-radius: 20px 20px 0 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.colorStyles.gray100};
`;

export const menuBox = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.colorStyles.gray100};
  border-radius: 16px;
  border: none;
  width: 62px;
  height: 62px;
  justify-content: center;
`;

export const menuNameBox = styled.div<ItemNamePrps>`
  ${({ theme }) => theme.font.fontSize.Nevi_M};
  ${({ theme, isSlected }) =>
    isSlected ? theme.font.fontType.B : theme.font.fontType.M};
  color: ${({ theme, isSlected }) =>
    isSlected
      ? theme.colors.colorStyles.gray900
      : theme.colors.colorStyles.gray600};
`;
