import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  display: flex;
  height: 844px;
  justify-content: center;
  align-items: center;
`;

export const ProfileBox = styled.div`
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
`;
export const ImgBox = styled.img`
  width: 74px;
  height: 74px;
  border-radius: 50%;
`;

export const NickNameBox = styled.div`
  ${({ theme }) => theme.font.fontSize.Caption_M}
  ${({ theme }) => theme.font.fontType.M}
`;
export const ContentBox = styled.div`
  ${({ theme }) => theme.font.fontSize.Body_S}
  ${({ theme }) => theme.font.fontType.R}
`;
