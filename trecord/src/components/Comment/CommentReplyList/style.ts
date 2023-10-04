import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  height: calc(100% - 190px);
  .user-img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }
  .reply_box {
    display: flex;
    gap: 25px;
    width: 350px;
  }
  .conetent_title {
    display: flex;
    align-items: center;
    width: 250px;
    justify-content: space-between;
    .user_id {
      ${({ theme }) => theme.font.fontSize.Body_M};
      ${({ theme }) => theme.font.fontType.S};
    }
  }

  .conetent_box {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 250px;
  }

  .user_data {
    ${({ theme }) => theme.font.fontSize.Body_S};
    ${({ theme }) => theme.font.fontType.R};
    display: inline-block;
    width: 220px;
    word-wrap: break-word;
  }

  .user_date {
    color: ${({ theme }) => theme.colors.colorStyles.gray600};
    ${({ theme }) => theme.font.fontSize.Caption_S};
    ${({ theme }) => theme.font.fontType.R};
    width: 220px;
  }
  .line_box {
    width: 270px;
    border: 1px solid ${({ theme }) => theme.colors.colorStyles.gray300};
    text-align: left;
    margin-left: 0;
    background: ${({ theme }) => theme.colors.colorStyles.gray300};
  }
`;
