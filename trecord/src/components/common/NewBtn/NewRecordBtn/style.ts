import { styled } from 'styled-components';

export const Layout = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.colorStyles.gray900};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-right: 20px;
  position: fixed;
  right: 0;
  bottom: 5%;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.16);
`;
