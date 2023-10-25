import styled from 'styled-components';
export const DropdownBox = styled.div`
  min-width: 97px;
  flex-shrink: 0;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.colorStyles.gray100};
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.12);

  .option:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.colorStyles.gray300};
  }

  .option {
    color: ${({ theme }) => theme.colors.colorStyles.gray900};
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    padding: 9px 24px;
    text-align: center;
  }
`;

export const Layout = styled.div<{ right?: string }>`
  display: flex;
  position: relative;
  > div {
    position: absolute;
    top: 25px;
    right: ${({ right = '10%' }) => right};
    z-index: 100;
  }
`;
