import { ReactElement } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div<{ display: string }>`
  display: ${({ display }) => display};
  position: fixed;
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
    width: calc(100vw * 0.6);
    @media (min-width: 501px) {
      width: calc(330px * 0.85);
    }

    border-radius: 8px;
    background: var(--gray-100, #fff);
    padding: 24px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    .content {
      .title {
        text-align: center;
        color: var(--gray-900, #1e1e1e);
        font-family: Pretendard;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 28px; /* 155.556% */
      }
      .body {
        text-align: center;
        color: var(--gray-600, #999);
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
        border: 1px solid var(--gray-900, #1e1e1e);
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px; /* 150% */
      }

      .close {
        background: var(--gray-900, #ffffff);
        color: var(--gray-900, #1e1e1e);
      }

      .confirm {
        background: var(--gray-900, #1e1e1e);
        color: #ffffff;
      }
    }
  }
`;

interface Props {
  openModal: boolean;
  title?: string;
  body: string;
  closeText?: string;
  confirmText?: string;
  onClose?: () => void;
  onConfirm?: () => void;
}

const Modal = ({
  openModal,
  title = undefined,
  body,
  closeText = undefined,
  confirmText = undefined,
  onClose,
  onConfirm,
}: Props): ReactElement => {
  return (
    <StyledDiv display={openModal ? 'flex' : 'none'}>
      <div className="modal">
        <div className="content">
          <div className="title">{title}</div>
          <div className="body">{body}</div>
        </div>
        <div className="button-container">
          {closeText && (
            <div className="button close" onClick={onClose}>
              {closeText}
            </div>
          )}
          {confirmText && (
            <div className="button confirm" onClick={onConfirm}>
              {confirmText}
            </div>
          )}
        </div>
      </div>
    </StyledDiv>
  );
};

export default Modal;
