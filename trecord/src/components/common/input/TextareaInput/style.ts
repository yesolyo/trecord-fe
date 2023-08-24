import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  label {
    ${({ theme }) => theme.font.fontSize.Body_S}
    ${({ theme }) => theme.font.fontType.R}
    margin-bottom:5px;
  }

  textarea {
    width: 332px;
    height: 93px;
    padding-left: 12px;
    padding-top: 10px;
    border: 1px solid ${({ theme }) => theme.colors.colorStyles.gray300};
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.colorStyles.gray600};
    ${({ theme }) => theme.font.fontSize.Body_S}
    ${({ theme }) => theme.font.fontType.R}
  }
`;
