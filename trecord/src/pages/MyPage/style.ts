import styled from 'styled-components';

export const Layout = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 844px;
`;

export const LineBox = styled.div`
  width: 390px;
  height: 10px;
  border: none;
  background: ${({ theme }) => theme.colors.colorStyles.gray300};
`;
