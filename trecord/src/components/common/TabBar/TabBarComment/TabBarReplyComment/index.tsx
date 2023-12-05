import * as S from './style';
import { postReplyCommentProps } from '@/apis/Comment/useReplyCommentMutation';
import { useParams } from 'react-router-dom';
interface Props {
  closeText: string;
  confirmText: string;
  disabled?: boolean;
  onClose?: () => void;
  onConfirm: ({ recordId, parentId, content }: postReplyCommentProps) => void;
  newComment: string;
  onNewComment: (content: string) => void;
  commentId: number;
}
export const TabBarReplyComment = ({
  closeText,
  confirmText,
  disabled = false,
  onClose,
  onConfirm,
  newComment,
  onNewComment,
  commentId,
}: Props) => {
  const { id } = useParams();
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
          onClick={() =>
            onConfirm({
              content: newComment,
              recordId: Number(id),
              parentId: commentId,
            })
          }
          disabled={disabled}
        >
          {confirmText}
        </button>
      </div>
    </S.Layout>
  );
};
