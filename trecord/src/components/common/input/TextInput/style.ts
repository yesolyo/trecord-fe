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
    height: 36px;
    width: 340px;
    padding-left: 12px;
    padding-top: 2px;
    border: 1px solid ${({ theme }) => theme.colors.colorStyles.gray300};
    border-radius: 8px;
    ${({ theme }) => theme.font.fontSize.Body_S}
    ${({ theme }) => theme.font.fontType.R}
    &:focus {
      color: ${({ theme }) => theme.colors.colorStyles.gray900};
    }
  }
`;
