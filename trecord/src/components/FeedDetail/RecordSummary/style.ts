import { styled } from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
`;
export const DataBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  border-left: 1px solid;
  height: 54px;
`;

export const AlignBox = styled.div`
  height: 54px;
  display: flex;
  align-items: center;
  border-left: 1px solid;
`;

export const DayBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  span {
    ${({ theme }) => theme.font.fontSize.Caption_M}
    ${({ theme }) => theme.font.fontType.M}
  }
`;
