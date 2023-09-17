import * as S from './style';

interface commentModalProps {
  id: number;
  editText: string;
  deleteText: string;
  replyText?: string;
  handleDeleteClick: ({}: deletDataProps) => void;
  onEdit: () => void;
  onCommentId: (id: number) => void;
  onDelete: () => void;
  isNewComment?: React.Dispatch<React.SetStateAction<boolean>>;
  onReplyEdit?: () => void;
  onCategory: () => void;
}

export interface deletDataProps {
  id: number;
}
export const CommentModal = ({ ...props }: commentModalProps) => {
  return (
    <S.Layout>
      <S.ButtonBox
        onClick={() => {
          props.onEdit();
          props.onCategory();
        }}
      >
        {props.editText}
      </S.ButtonBox>
      <S.LineBox />
      <S.ButtonBox
        onClick={() => {
          props.onDelete();
          props.onCategory();
        }}
      >
        {props.deleteText}
      </S.ButtonBox>
      {props.replyText && (
        <>
          <S.LineBox />
          <S.ButtonBox
            onClick={() => {
              {
                props.onReplyEdit && props.onReplyEdit();
              }
              props.onCategory();
            }}
          >
            {props.replyText}
          </S.ButtonBox>
        </>
      )}
    </S.Layout>
  );
};
