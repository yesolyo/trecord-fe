import { ReactElement } from 'react';
import * as S from './style';
interface Props {
  openModal: boolean;
  allText: string;
  commentText: string;
  likeText: string;
  invitaitonText: string;
  onAll?: () => void;
  onComment?: () => void;
  onLike?: () => void;
  onInvitation?: () => void;
}

const AlarmFilterBox = ({
  openModal,
  allText,
  commentText,
  likeText,
  invitaitonText,
  onAll,
  onComment,
  onLike,
  onInvitation,
}: Props): ReactElement => {
  return (
    <S.Layout display={openModal ? 'flex' : 'none'}>
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
        <button className="select" onClick={onInvitation}>
          {invitaitonText}
        </button>
      </div>
    </S.Layout>
  );
};

export default AlarmFilterBox;
