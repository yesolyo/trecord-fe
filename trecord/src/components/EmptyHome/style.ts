import { styled } from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 750px;
  justify-content: center;
  width: 100%;
`;

export const TextBox = styled.span`
  ${({ theme }) => theme.font.fontSize.Title_L};
  ${({ theme }) => theme.font.fontType.S};
  ${({ theme }) => theme.colors.colorStyles.gray900};
`;
export const ExplainBox = styled.div`
  display: block;
  span {
    display: block;
    ${({ theme }) => theme.font.fontSize.Body_M};
    ${({ theme }) => theme.font.fontType.R};
    ${({ theme }) => theme.colors.colorStyles.gray900};
  }
`;
