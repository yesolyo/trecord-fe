import styled, { keyframes } from 'styled-components';
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
export const Layout = styled.div`
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: 2px solid #000;
  border-top: 2px solid ${({ theme }) => theme.colors.colorStyles.gray100};
  animation: ${rotate} 1s linear infinite;
`;
