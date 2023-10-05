import styled from 'styled-components';

export const Layout = styled.div`
  position: relative;
  overflow: auto;
  height: 100%;
  width: 100%;

  img {
    width: 100%;
    height: 509px;
  }
`;

export const EditButtonBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-right: 20px;
  right: 0;
  bottom: 5%;
`;
export const ImgBox = styled.div`
  background: white;
  filter: brightness(85%);
  -webkit-mask-image: linear-gradient(to top, transparent -80%, black 100%);
`;
export const IconBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ExplainBox = styled.div`
  top: 490px;
  width: 100%;
  box-sizing: border-box;
  height: calc(100vh - 490px);
  @media (min-width: 431px) {
    height: calc(844px - 490px);
  }
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.colorStyles.gray100};
  box-shadow: 0px -10px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 5px;

  .detail_name {
    ${({ theme }) => theme.font.fontSize.Title_M}
    ${({ theme }) => theme.font.fontType.S}
  }
  .detail_place {
    display: inline-flex;
    gap: 4px;
    ${({ theme }) => theme.font.fontSize.Body_S}
    ${({ theme }) => theme.font.fontType.R}
    padding-bottom:10px;
  }
  .detail_description {
    ${({ theme }) => theme.font.fontSize.Body_S}
    ${({ theme }) => theme.font.fontType.R}
    padding-top:25px;
  }
`;

export const EmojiBox = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding-top: 18px;
  ${({ theme }) => theme.font.fontSize.Body_S}
  ${({ theme }) => theme.font.fontType.R}
`;

export const FeelBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
