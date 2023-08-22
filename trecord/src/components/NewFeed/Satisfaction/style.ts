import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  span {
    ${({ theme }) => theme.font.fontSize.Body_S}
    ${({ theme }) => theme.font.fontType.R}
    margin-bottom:5px;
  }
`;

export const EmojiBox = styled.div`
  display: flex;
  gap: 7.5px;
`;
