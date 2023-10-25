import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none; /* So that it doesn't block other UI elements */
  z-index: 1500;
  padding: 10%;
  @media (min-width: 431px) {
    padding: 19vh;
  }

  .toast {
    padding: 12px 16px;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.87);
    color: ${({ theme }) => theme.colors.colorStyles.gray100};
    font-size: 16px;
    max-width: 90%;
    word-wrap: break-word;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
    transition:
      opacity 0.3s,
      transform 0.3s;
    transform: translateY(0);
    opacity: 1;
  }

  .toast.exiting {
    transform: translateY(100px);
    opacity: 0;
  }
`;
