import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 135px;
  max-height: 135px;
  width: 340px;
  border: 1px solid ${({ theme }) => theme.colors.colorStyles.gray300};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.colorStyles.gray600};
  ${({ theme }) => theme.font.fontSize.Body_S}
  ${({ theme }) => theme.font.fontType.R}

  label {
    border-radius: 8px;
    width: 100%;
    height: 100%;
    ${({ theme }) => theme.font.fontSize.Body_S}
    ${({ theme }) => theme.font.fontType.R}
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .no-display {
    display: none;
  }

  .dragging {
    background-color: ${({ theme }) => theme.colors.colorStyles.gray300};
  }

  .pic {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 8px;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 8px;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.62) 0%,
        rgba(0, 0, 0, 0) 100%
      );
      pointer-events: none;
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
    }

    .close-button {
      border-radius: 8px;
      position: absolute;
      top: 0;
      right: 0;
      color: white;
      padding: 5px;
      cursor: pointer;
    }
  }
`;
