import styled from 'styled-components';

export const Layout = styled.div`
  padding-top: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 110px);
  overflow: auto;
  overflow-x: hidden;
  .container {
    display: flex;
    gap: 30px;
    height: 64px;
    width: 350px;
    justify-content: flex-end;
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .title {
    ${({ theme }) => theme.font.fontSize.Body_S};
    ${({ theme }) => theme.font.fontType.R};
    width: 225px;
  }
  .ellipsis {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .sub {
    ${({ theme }) => theme.font.fontSize.caption_S};
    ${({ theme }) => theme.font.fontType.R};
    color: ${({ theme }) => theme.colors.colorStyles.gray600};
  }
  .img {
    width: 39px;
    height: 39px;
    border-radius: 8px;
  }
  .line {
    width: 390px;
    height: 1px;
    border: none;
    background: ${({ theme }) => theme.colors.colorStyles.gray300};
  }
`;
