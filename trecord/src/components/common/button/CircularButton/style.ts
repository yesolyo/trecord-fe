import styled from 'styled-components';

export const IconButtonBox = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.colorStyles.gray900};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.16);
`;
