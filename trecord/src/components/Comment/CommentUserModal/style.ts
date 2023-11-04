import styled from 'styled-components';

export const Layout = styled.div<{ display: string }>`
  display: ${({ display }) => display};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(30, 30, 30, 0.08);
  z-index: 1000;
  align-items: center;
  justify-content: center;
  .profile {
    display: flex;
    width: 286px;
    height: 284px;
    border-radius: 8px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    background: ${({ theme }) => theme.colors.colorStyles.gray100};
    position: absolute;
    z-index: 25;
    .user-img {
      width: 74px;
      height: 74px;
      border-radius: 50%;
    }
    .title {
      ${({ theme }) => theme.font.fontSize.Caption_M}
      ${({ theme }) => theme.font.fontType.M}
    }
    .body {
      ${({ theme }) => theme.font.fontSize.Body_S}
      ${({ theme }) => theme.font.fontType.R}
    }
  }
`;
