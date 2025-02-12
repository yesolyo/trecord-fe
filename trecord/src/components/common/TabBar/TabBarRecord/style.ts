import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  padding-top: 10px;

  justify-content: flex-end;
  position: absolute;
  bottom: 0;
  gap: 10px;
  border-top: 1px solid ${({ theme }) => theme.colors.colorStyles.gray300};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: ${({ theme }) => theme.colors.colorStyles.gray100};
  .container {
    display: flex;
    gap: 5px;
    padding-right: 10px;
  }
`;
