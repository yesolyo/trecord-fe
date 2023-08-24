import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  background: none;

  span {
    ${({ theme }) => theme.font.fontSize.Body_S}
    ${({ theme }) => theme.font.fontType.R}
    margin-bottom:5px;
  }
`;

export const TagBox = styled.div`
  display: flex;
  gap: 7px;
`;
