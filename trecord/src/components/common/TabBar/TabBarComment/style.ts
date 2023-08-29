import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  width: 390px;
  height: 100px;
  position: fixed;
  justify-content: center;
  align-items: center;
  gap: 10px;
  bottom: 0;
  background: ${({ theme }) => theme.colors.colorStyles.gray100};
`;

export const InputBox = styled.input`
  width: 256px;
  height: 48px;
  padding-left: 15px;
  border: 1px solid ${({ theme }) => theme.colors.colorStyles.gray300};
  border-radius: 8px;
`;
