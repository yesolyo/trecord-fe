import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  .text {
    ${({ theme }) => theme.font.fontSize.Body_M};
    ${({ theme }) => theme.font.fontType.R};
    ${({ theme }) => theme.colors.colorStyles.gray900};
  }
`;
