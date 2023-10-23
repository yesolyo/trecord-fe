import styled from 'styled-components';

export const Layout = styled.div<{ display: string }>`
  display: ${({ display }) => display};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(30, 30, 30, 0.08);
  z-index: 1000;
  align-items: flex-end;
  justify-content: center;

  .modal {
    display: flex;

    flex-direction: column;
    gap: 30px;

    width: calc(100vw);
    @media (min-width: 431px) {
      width: calc(400px * 0.85);
    }

    background: ${({ theme }) => theme.colors.colorStyles.gray100};
    padding: 24px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .select {
    background: none;
    border: none;
    display: flex;
    ${({ theme }) => theme.font.fontSize.Body_M}
    ${({ theme }) => theme.font.fontType.R};
    color: ${({ theme }) => theme.colors.colorStyles.gray900};
  }
`;
