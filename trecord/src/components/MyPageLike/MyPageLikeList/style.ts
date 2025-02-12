import styled from 'styled-components';

export const Layout = styled.div`
  padding-top: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100% - 80px);
  overflow: auto;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  .container {
    display: flex;
    gap: 30px;
    height: 64px;
    width: 350px;
    justify-content: flex-start;
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
    border: 1px solid ${({ theme }) => theme.colors.colorStyles.gray300};
    background: none;
  }
`;
