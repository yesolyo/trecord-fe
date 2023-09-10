import { ReactElement } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div<{ display: string }>`
  display: ${({ display }) => display};
  position: absolute;
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

  .select {
    background: none;
    border: none;
    display: flex;
    ${({ theme }) => theme.font.fontSize.Body_M}
    ${({ theme }) => theme.font.fontType.R};
  }
`;

interface Props {
  openModal: boolean;
  allText: string;
  commentText: string;
  likeText: string;
  onAll?: () => void;
  onComment?: () => void;
  onLike?: () => void;
}

const AlarmFilterBox = ({
  openModal,
  allText,
  commentText,
  likeText,
  onAll,
  onComment,
  onLike,
}: Props): ReactElement => {
  return (
    <StyledDiv display={openModal ? 'flex' : 'none'}>
      <div className="modal">
        <button className="select" onClick={onAll}>
          {allText}
        </button>
        <button className="select" onClick={onComment}>
          {commentText}
        </button>
        <button className="select" onClick={onLike}>
          {likeText}
        </button>
      </div>
    </StyledDiv>
  );
};

export default AlarmFilterBox;
