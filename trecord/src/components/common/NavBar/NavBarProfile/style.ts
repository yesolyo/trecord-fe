import styled from 'styled-components';

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 22px;
  margin-top: 50px;

  .profile_main-title {
    ${({ theme }) => theme.font.fontSize.Title_BL}
    ${({ theme }) => theme.font.fontType.B}
  }
  .profile_sub-title {
    ${({ theme }) => theme.font.fontSize.Body_S}
    ${({ theme }) => theme.font.fontType.R}
  }
`;
