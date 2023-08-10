import { styled } from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 844px;
  justify-content: center;
`;
export const ExplainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.font.fontSize.Body_S};
  ${({ theme }) => theme.font.fontType.R};
  margin-bottom: 35px;
`;

export const CharcterBox = styled.div`
  margin-bottom: 45px;
`;

export const LogoBox = styled.div`
  margin-bottom: 25px;
`;
