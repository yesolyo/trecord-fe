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
  z-index: 10;
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

    background: var(--gray-100, #fff);
    padding: 24px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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

const AlarmFilterBox = ({ openModal }: Props): ReactElement => {
  return (
    <StyledDiv display={openModal ? 'flex' : 'none'}>
      <div className="modal">
        <div className="select">수정하기</div>
        <div className="select">수정하기</div>
        <div className="select">수정하기</div>
      </div>
    </StyledDiv>
  );
};

export default AlarmFilterBox;
