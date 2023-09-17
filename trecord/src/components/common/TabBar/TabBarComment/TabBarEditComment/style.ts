import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  width: 390px;
  height: 100px;
  position: absolute;
  justify-content: center;
  align-items: center;
  bottom: 0;
  background: ${({ theme }) => theme.colors.colorStyles.gray100};
  gap: 10px;
  .btn_box {
    display: flex;
    gap: 1.5px;
  }

  .input_box {
    width: 210px;
    height: 48px;
    padding-left: 15px;
    border: 1px solid ${({ theme }) => theme.colors.colorStyles.gray300};
    border-radius: 8px;
  }
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
