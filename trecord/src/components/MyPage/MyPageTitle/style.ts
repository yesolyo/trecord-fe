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
  display: inline-block;
  width: 270px;
  word-wrap: break-word;
`;
