import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 97px;
  height: 114px;
  border: 1px solid ${({ theme }) => theme.colors.colorStyles.gray300};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.colorStyles.gray100};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 100;
`;

export const ButtonBox = styled.button`
  border: none;
  background: ${({ theme }) => theme.colors.colorStyles.gray100};
  ${({ theme }) => theme.font.fontSize.Body_S}
  ${({ theme }) => theme.font.fontType.R}
`;
export const LineBox = styled.hr`
  width: 97px;
  border: none;
  height: 1px;
  background: ${({ theme }) => theme.colors.colorStyles.gray300};
`;
