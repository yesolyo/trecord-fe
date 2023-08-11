import { styled } from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  label {
    ${({ theme }) => theme.font.fontSize.Body_S}
    ${({ theme }) => theme.font.fontType.R}
  margin-bottom:5px;
  }
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  input {
    height: 46px;
    width: 292px;
    padding-left: 12px;
    padding-top: 2px;
    border: 1px solid ${({ theme }) => theme.colors.colorStyles.gray300};
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.colorStyles.gray600};
    ${({ theme }) => theme.font.fontSize.Body_S}
    ${({ theme }) => theme.font.fontType.R}
  }
`;
