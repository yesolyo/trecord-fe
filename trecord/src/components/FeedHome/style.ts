import styled from 'styled-components';

export const Layout = styled.div`
  height: calc(100% - 190px);
  overflow: auto;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 18px;
  padding-top: 90px;
  padding-bottom: 100px;
`;

export const TopBox = styled.div`
  height: 90px;
`;

export const ImgBox = styled.div`
  display: flex;
  width: 342px;
  height: 180px;
  position: relative;
  border-radius: 8px;

  img {
    border-radius: 8px;
    filter: brightness(72%);
    background: white;
    object-fit: cover;
  }
`;

export const TextBox = styled.div`
  position: absolute;
  top: 68%;
  left: 3%;
  .feed_name {
    ${({ theme }) => theme.font.fontSize.Title_S}
    ${({ theme }) => theme.font.fontType.S}
    color:${({ theme }) => theme.colors.colorStyles.gray100}
  }
  .feed_sub {
    display: flex;
    ${({ theme }) => theme.font.fontSize.Body_S}
    ${({ theme }) => theme.font.fontType.R}
    color:${({ theme }) => theme.colors.colorStyles.gray100}
  }
  .feed_place {
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    width: 120px;
    overflow: hidden;
  }
`;
