import * as S from './style';

interface commentModalProps {
  id: number;
  handleDeleteClick: ({}: deletDataProps) => void;
  onEdit: () => void;
  onCommentId: (id: number) => void;
  onDelete: () => void;
  isNewComment?: React.Dispatch<React.SetStateAction<boolean>>;
  onReplyEdit: () => void;
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
        수정하기
      </S.ButtonBox>
      <S.LineBox />
      <S.ButtonBox
        onClick={() => {
          props.onDelete();
          props.onCategory();
        }}
      >
        삭제하기
      </S.ButtonBox>
      <S.LineBox />
      <S.ButtonBox
        onClick={() => {
          props.onReplyEdit();
          props.onCategory();
        }}
      >
        답글달기
      </S.ButtonBox>
    </S.Layout>
  );
};
