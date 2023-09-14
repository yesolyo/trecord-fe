import * as S from './style';
interface Props {
  closeText: string;
  confirmText: string;
  disabled: boolean;
  onClose: () => void;
  onConfirm?: () => void;
}
export const TabBarCommentEdit = ({
  closeText,
  confirmText,
  disabled,
  onClose,
  onConfirm,
}: Props) => {
  return (
    <S.Layout>
      <button className="close_btn" onClick={onClose}>
        {closeText}
      </button>
      <button className="confirm_btn" onClick={onConfirm} disabled={disabled}>
        {confirmText}
      </button>
    </S.Layout>
  );
};
