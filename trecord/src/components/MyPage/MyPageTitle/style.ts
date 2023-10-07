import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 35px;
  padding-bottom: 25px;
`;
export const ImgBox = styled.img`
  border-radius: 50%;
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const NameBox = styled.span`
  ${({ theme }) => theme.font.fontSize.Title_S};
  ${({ theme }) => theme.font.fontType.S};
`;
export const IntroduceBox = styled.span`
  ${({ theme }) => theme.font.fontSize.Caption_S};
  ${({ theme }) => theme.font.fontType.R};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 264px;
`;
