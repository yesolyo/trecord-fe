import { ReactElement, ReactNode, useEffect, useRef } from 'react';
import * as S from './style';
export type Size = 'medium' | 'large';
interface Props {
  size?: Size;
  openModal: boolean;
  children?: ReactNode;
  title?: string;
  body?: string;
  closeText?: string;
  confirmText?: string;
  onClose?: () => void;
  onConfirm?: () => void;
}

const ModalBody = ({
  title = undefined,
  body,
  closeText = undefined,
  confirmText = undefined,
  onClose,
  onConfirm,
}: Omit<Props, 'openModal' | 'size'>): ReactElement => {
  return (
    <>
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
    </>
  );
};

const Modal = ({
  size = 'medium',
  openModal,
  children = undefined,
  title = undefined,
  body = undefined,
  closeText = undefined,
  confirmText = undefined,
  onClose,
  onConfirm,
}: Props): ReactElement => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLDivElement;
      if (target?.lastChild === modalRef.current) onClose?.();
    };

    if (openModal) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [openModal, onClose]);

  return (
    <S.Layout size={size} display={openModal ? 'flex' : 'none'}>
      <div className="modal" ref={modalRef}>
        {!children && (
          <ModalBody
            title={title}
            body={body}
            closeText={closeText}
            confirmText={confirmText}
            onClose={onClose}
            onConfirm={onConfirm}
          />
        )}
        {children}
      </div>
    </S.Layout>
  );
};

export default Modal;
