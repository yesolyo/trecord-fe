import styled from 'styled-components';

const StyledModalBody = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 21px; */
  gap: 20px;

  .invite {
    display: flex;
    flex-direction: column;
    gap: 12px;
    .title {
      text-align: center;
      color: ${({ theme }) => theme.colors.colorStyles.gray900};
      font-family: Pretendard;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 28px; /* 155.556% */
    }
    .input-result {
      display: flex;
      flex-direction: column;
      padding-top: 10px;

      .user-list {
      }
    }
    .input-container {
      display: inline-flex;
      gap: 10px;
      input {
        box-sizing: border-box;
        flex: 1;
        height: 48px;
        padding-left: 12px;
        padding-top: 2px;
        border: 1px solid ${({ theme }) => theme.colors.colorStyles.gray300};
        border-radius: 8px;
        color: ${({ theme }) => theme.colors.colorStyles.gray600};
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 142.857% */
        &:focused {
          border: 1px solid ${({ theme }) => theme.colors.colorStyles.gray900};
        }
      }
      button {
        border: 0;
        width: 61px;
        height: 48px;
        flex-shrink: 0;
        border-radius: 8px;
        background-color: ${({ theme }) => theme.colors.colorStyles.gray900};
        color: ${({ theme }) => theme.colors.colorStyles.gray100};
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 142.857% */

        &:disabled {
          background-color: ${({ theme }) => theme.colors.colorStyles.gray500};
        }
      }
    }
  }

  hr {
    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.colors.colorStyles.gray400};
  }

  .share {
    display: inline-flex;
    justify-content: flex-end;

    .button {
      display: inline-flex;
      gap: 5px;
      color: ${({ theme }) => theme.colors.colorStyles.gray900};
      font-family: Pretendard;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 150% */
    }
  }
`;

export default StyledModalBody;
