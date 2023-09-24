import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
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
    color: ${({ theme }) => theme.colors.colorStyles.gray600};
    ${({ theme }) => theme.font.fontSize.Body_S}
    ${({ theme }) => theme.font.fontType.R}
  }
  .modal_place {
    border: 1px solid ${({ theme }) => theme.colors.colorStyles.gray300};
    display: flex;
    width: 350px;
    background: white;
    flex-direction: column;
    justify-content: center;
    padding-left: 5px;
    position: absolute;
    margin: 0 auto;
    z-index: 10;
    top: 65px;
    overflow: auto;
  }
`;
