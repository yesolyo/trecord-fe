import styled from 'styled-components';

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 22px;
  margin-top: 50px;
  .profileTitle {
    ${({ theme }) => theme.font.fontSize.Title_BL}
    ${({ theme }) => theme.font.fontType.B}
  }
  .profileText {
    ${({ theme }) => theme.font.fontSize.Body_S}
    ${({ theme }) => theme.font.fontType.R}
  }
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  padding-top: 70px;
  height: calc(100% - 170px);
  overflow: auto;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const BtnBox = styled.div`
  padding-top: 17px;
`;

export const EmptyBox = styled.div`
  background: ${({ theme }) => theme.colors.colorStyles.gray900};
  opacity: 0.2;
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const ModalBox = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
