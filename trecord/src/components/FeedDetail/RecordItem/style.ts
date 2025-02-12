import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-top: 30px;
  padding-bottom: 20px;
  h2 {
    ${({ theme }) => theme.font.fontType.R};
    ${({ theme }) => theme.font.fontSize.Body_M};
  }
`;

export const GroupBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ItemBox = styled.div`
  display: flex;
  align-items: center;
  width: 312px;
  border-radius: 8px;
  box-shadow: 0px -2px 10px rgba(0, 0, 8, 0.12);
  gap: 15px;
  padding: 8px 15px;
`;

export const ImgBox = styled.img`
  width: 64px !important;
  height: 64px !important;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.colorStyles.gray600};
`;

export const DataBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 15px;
  .record_date {
    ${({ theme }) => theme.font.fontType.R};
    ${({ theme }) => theme.font.fontSize.Body_S};
    color: ${({ theme }) => theme.colors.colorStyles.gray600};
  }
  .record_title {
    display: inline-flex;
    align-items: center;
    ${({ theme }) => theme.font.fontType.R};
    ${({ theme }) => theme.font.fontSize.Body_M};
    color: ${({ theme }) => theme.colors.colorStyles.gray900};
  }
  .icon-container {
    flex: 1;
    display: inline-flex;
    justify-content: end;
    align-items: center;
  }
`;
