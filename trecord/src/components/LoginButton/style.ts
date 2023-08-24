import styled from 'styled-components';

export const Layout = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 342px;
  height: 56px;
  border: 1px solid ${({ theme }) => theme.colors.colorStyles.gray300};
  background: ${({ theme }) => theme.colors.colorStyles.gray100};
  border-radius: 8px;
  span {
    margin-left: 15px;
  }
`;
