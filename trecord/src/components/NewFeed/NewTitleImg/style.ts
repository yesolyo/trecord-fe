import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 135px;
  width: 342px;
  border: 1px solid ${({ theme }) => theme.colors.colorStyles.gray300};
  border-radius: 8px;

  img {
    height: 135px;
    width: 342px;
    border-radius: 8px;
    object-fit: cover;
  }
`;

export const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;

  .title_img {
    ${({ theme }) => theme.font.fontSize.Body_S}
    ${({ theme }) => theme.font.fontType.R}
    color:${({ theme }) => theme.colors.colorStyles.gray600};
  }
`;
