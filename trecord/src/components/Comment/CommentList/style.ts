import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding-top: 90px;
  padding-bottom: 100px;
  width: 100%;
  height: calc(100% - 190px);
  overflow: auto;

  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  .reply {
    ${({ theme }) => theme.font.fontSize.Caption_S}
    ${({ theme }) => theme.font.fontType.R};
    background: none;
    border: none;
    display: flex;
    padding: 0;
  }
  .user-img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }
  .line_box {
    width: 390px;
    border: 1px solid ${({ theme }) => theme.colors.colorStyles.gray300};
    text-align: left;
    margin-left: 0;
    background: ${({ theme }) => theme.colors.colorStyles.gray300};
  }
`;
export const LineBox = styled.hr`
  width: 390px;
  height: 1px;
  border: none;
  background: ${({ theme }) => theme.colors.colorStyles.gray300};
`;
export const CommentBox = styled.div`
  display: flex;
  gap: 25px;
  width: 350px;
`;
export const CommentDataBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 300px;

  .user_id {
    ${({ theme }) => theme.font.fontSize.Body_M}
    ${({ theme }) => theme.font.fontType.S}
  }
  .user_data {
    ${({ theme }) => theme.font.fontSize.Body_S}
    ${({ theme }) => theme.font.fontType.R}
    display: inline-block;
    width: 280px;
    word-wrap: break-word;
  }
  .user_date {
    color: ${({ theme }) => theme.colors.colorStyles.gray600};
    ${({ theme }) => theme.font.fontSize.Caption_S}
    ${({ theme }) => theme.font.fontType.R};
  }
`;

export const CommentMainDataBox = styled.div`
  display: flex;
  align-items: center;
  width: 288px;
  justify-content: space-between;
`;
