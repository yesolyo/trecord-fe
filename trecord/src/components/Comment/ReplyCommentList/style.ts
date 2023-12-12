import styled from 'styled-components';

export const Layout = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  height: calc(100% - 190px);

  .line_box {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.colorStyles.gray300};
    text-align: left;
    margin-left: 0;
    background: ${({ theme }) => theme.colors.colorStyles.gray300};
  }
`;
