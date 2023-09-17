import { putDataProps } from '@/types/comment';
import * as S from './style';
interface Props {
  closeText: string;
  confirmText: string;
  disabled?: boolean;
  onClose?: () => void;
  onConfirm: ({ id, content }: putDataProps) => void;
  newComment: string;
  commentId: number;
  onNewComment: (content: string) => void;
}
export const TabBarEditComment = ({
  closeText,
  confirmText,
  disabled = false,
  onClose,
  onConfirm,
  newComment,
  onNewComment,
  commentId,
}: Props) => {
  return (
    <S.Layout>
      <input
        className="input_box"
        placeholder="댓글을 남겨보세요"
        value={newComment}
        onChange={(e: any) => onNewComment(e.target.value)}
      />
      <div className="btn_box">
        <button className="close_btn" onClick={onClose}>
          {closeText}
        </button>
        <button
          className="confirm_btn"
          onClick={() => onConfirm({ id: commentId, content: newComment })}
          disabled={disabled}
        >
          {confirmText}
        </button>
      </div>
    </S.Layout>
  );
};
