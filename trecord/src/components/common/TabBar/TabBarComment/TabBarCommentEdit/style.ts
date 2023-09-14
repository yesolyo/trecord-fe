import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  gap: 1.5px;
  .close_btn {
    width: 61px;
    height: 48px;
    border-radius: 8px 0 0 8px;
    border: none;
    color: ${({ theme }) => theme.colors.colorStyles.gray100};
    background: ${({ theme }) => theme.colors.colorStyles.gray900};
  }
  .confirm_btn {
    width: 61px;
    height: 48px;
    border-radius: 0 8px 8px 0px;
    border: none;
    color: ${({ theme }) => theme.colors.colorStyles.gray100};
    background: ${({ theme }) => theme.colors.colorStyles.gray900};
    &:disabled {
      background: ${({ theme }) => theme.colors.colorStyles.gray600};
    }
  }
`;
