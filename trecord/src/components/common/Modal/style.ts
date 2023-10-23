import styled from 'styled-components';
import { Size } from '.';

const SIZES: {
  [key in Size]: {
    normal: string;
    media: string;
  };
} = {
  medium: {
    normal: 'calc(100vw * 0.6)',
    media: 'calc(330px * 0.85)',
  },
  large: {
    normal: 'calc(100vw * 0.8)',
    media: 'calc(330px * 0.95)',
  },
};
export const Layout = styled.div<{ display: string; size: Size }>`
  display: ${({ display }) => display};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(30, 30, 30, 0.08);
  z-index: 1000;
  align-items: center;
  justify-content: center;
  .modal {
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    align-items: center;
    width: ${({ size }) => SIZES[size]};
    @media (min-width: 431px) {
      width: ${({ size }) => SIZES[size]};
    }

    border-radius: 8px;
    background: ${({ theme }) => theme.colors.colorStyles.gray100};
    padding: 24px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    .content {
      .title {
        text-align: center;
        color: ${({ theme }) => theme.colors.colorStyles.gray900};
        font-family: Pretendard;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 28px; /* 155.556% */
      }
      .body {
        text-align: center;
        color: ${({ theme }) => theme.colors.colorStyles.gray600};
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 142.857% */
      }
    }

    .button-container {
      width: 100%;
      display: flex;
      gap: 12px;

      .button {
        flex: 1;
        display: inline-flex;
        height: 41px;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        border: 1px solid ${({ theme }) => theme.colors.colorStyles.gray900};
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px; /* 150% */
      }

      .close {
        background: ${({ theme }) => theme.colors.colorStyles.gray100};
        color: ${({ theme }) => theme.colors.colorStyles.gray900};
      }

      .confirm {
        background: ${({ theme }) => theme.colors.colorStyles.gray900};
        color: ${({ theme }) => theme.colors.colorStyles.gray100};
      }
    }
  }
`;
