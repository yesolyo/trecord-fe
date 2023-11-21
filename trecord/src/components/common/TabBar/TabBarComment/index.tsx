import * as S from './style';
interface Props {
  commentType: string;
  closeText?: string;
  confirmText: string;
  disabled?: boolean;
  onClose?: () => void;
  onConfirm: (v: string) => void;
  comment: string;
  onSaveComment: (content: string) => void;
}
export const TabBarComment = ({
  commentType = 'NEW',
  closeText,
  confirmText,
  disabled = false,
  onClose,
  onConfirm,
  comment,
  onSaveComment,
}: Props) => {
  const type = commentType === 'NEW';
  const inputName = type ? 'new_box' : 'input_box';
  const confirmButton = type ? 'new-confirm_button' : 'confirm_button';

  return (
    <S.Layout>
      <input
        className={inputName}
        placeholder="댓글을 남겨보세요"
        value={comment}
        onChange={(e: any) => onSaveComment(e.target.value)}
      />
      <div className="button_box">
        {!type && (
          <button className="close_btn" onClick={onClose}>
            {closeText}
          </button>
        )}
        <button
          className={confirmButton}
          onClick={() => onConfirm(commentType)}
          disabled={disabled}
        >
          {confirmText}
        </button>
      </div>
    </S.Layout>
  );
};
