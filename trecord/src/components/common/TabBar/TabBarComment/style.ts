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

  .new_box {
    width: 256px;
    height: 48px;
    padding-left: 15px;
    border: 1px solid ${({ theme }) => theme.colors.colorStyles.gray300};
    border-radius: 8px;
  }

  .button_box {
    display: flex;
    gap: 1.5px;
  }

  .new_button_box {
    padding: 28px 36px 28px 36px;
    border-radius: 0 8px 8px 0px;
    border: none;
    color: ${({ theme }) => theme.colors.colorStyles.gray100};
    background: ${({ theme }) => theme.colors.colorStyles.gray900};
    &:disabled {
      background: ${({ theme }) => theme.colors.colorStyles.gray600};
    }
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
    &:disabled {
      background: ${({ theme }) => theme.colors.colorStyles.gray600};
    }
  }

  .confirm_button {
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

  .new-confirm_button {
    padding: 15px 23px;
    border-radius: 8px;
    ${({ theme }) => theme.font.fontSize.Body_S};
    ${({ theme }) => theme.font.fontType.S};
    color: ${({ theme }) => theme.colors.colorStyles.gray100};
    background: ${({ theme }) => theme.colors.colorStyles.gray900};
    &:disabled {
      background: ${({ theme }) => theme.colors.colorStyles.gray600};
    }
  }
`;
