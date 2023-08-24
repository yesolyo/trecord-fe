import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  width: 342px;
  gap: 5px;
  justify-content: flex-end;
  padding-top: 65px;
`;
export const BtnBox = styled.button`
  border: none;
  background: none;
  ${({ theme }) => theme.font.fontSize.Body_S};
  ${({ theme }) => theme.font.fontType.R};
`;
