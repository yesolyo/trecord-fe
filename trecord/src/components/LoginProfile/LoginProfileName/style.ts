import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  label {
    ${({ theme }) => theme.font.fontSize.Body_S}
    ${({ theme }) => theme.font.fontType.R}
    margin-bottom:5px;
  }

  input {
    height: 40px;
    width: 270px;
    padding-left: 12px;
    padding-top: 2px;
    border: 1px solid ${({ theme }) => theme.colors.colorStyles.gray300};
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.colorStyles.gray600};
    ${({ theme }) => theme.font.fontSize.Body_S}
    ${({ theme }) => theme.font.fontType.R}
  }
  .container {
    display: flex;
    gap: 10px;
  }
  .button {
    width: 50px;
    border-radius: 8px;
    border: none;
    background: ${({ theme }) => theme.colors.colorStyles.gray900};
    color: ${({ theme }) => theme.colors.colorStyles.gray100};
    &:disabled {
      background: ${({ theme }) => theme.colors.colorStyles.gray500};
      color: ${({ theme }) => theme.colors.colorStyles.gray100};
    }
  }
`;
