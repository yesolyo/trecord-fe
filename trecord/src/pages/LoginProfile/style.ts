import { styled } from 'styled-components';

export const Layout = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 844px;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 22px;
  margin-top: 50px;
  .profileTitle {
    ${({ theme }) => theme.font.fontSize.Title_BL}
    ${({ theme }) => theme.font.fontType.B}
  }
  .profileText {
    ${({ theme }) => theme.font.fontSize.Body_S}
    ${({ theme }) => theme.font.fontType.R}
  }
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
`;
