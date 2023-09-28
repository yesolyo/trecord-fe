import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  justify-content: center;

  flex-direction: column;
  gap: 10px;
  width: 342px;
  padding-bottom: 25px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.colorStyles.gray300};
  .title {
    ${({ theme }) => theme.font.fontSize.Title_M}
    ${({ theme }) => theme.font.fontType.S}
  }
`;
export const DateBox = styled.div`
  display: flex;
  gap: 35px;
  align-items: flex-end;
  .second,
  .first {
    ${({ theme }) => theme.font.fontSize.Body_S}
    ${({ theme }) => theme.font.fontType.R}
  }
`;

export const PlaceBox = styled.div`
  display: flex;

  .second,
  .first {
    ${({ theme }) => theme.font.fontSize.Body_S}
    ${({ theme }) => theme.font.fontType.R}
  }
  .map_view {
    border: none;
    background: none;
    color: ${({ theme }) => theme.colors.colorStyles.blue};
    ${({ theme }) => theme.font.fontType.S}
  }
  .space {
    padding-right: 63px;
  }
  .ellipsis {
    display: inline-block;
    width: 61px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
export const FeelBox = styled.div`
  display: flex;
  gap: 24px;
  .second,
  .first {
    ${({ theme }) => theme.font.fontSize.Body_S}
    ${({ theme }) => theme.font.fontType.R}
  }
`;

export const MoveBox = styled.div`
  display: flex;
  gap: 40px;
  .second,
  .first {
    ${({ theme }) => theme.font.fontSize.Body_S}
    ${({ theme }) => theme.font.fontType.R}
  }
`;

export const PeopleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  .second,
  .first {
    ${({ theme }) => theme.font.fontSize.Body_S}
    ${({ theme }) => theme.font.fontType.R}
  }
`;
