import * as S from './style';

interface commentModalProps {
  id: number;
  handleDeleteClick: ({}: deletDataProps) => void;
  isEdit: React.Dispatch<React.SetStateAction<boolean>>;
  commentId: React.Dispatch<React.SetStateAction<number>>;
}

export interface deletDataProps {
  id: number;
}
export const CommentModal = ({ ...props }: commentModalProps) => {
  return (
    <S.Layout>
      <S.ButtonBox
        onClick={() => {
          props.isEdit(true);
          props.commentId(props.id);
        }}
      >
        수정하기
      </S.ButtonBox>
      <S.LineBox />
      <S.ButtonBox onClick={() => props.handleDeleteClick({ id: props.id })}>
        삭제하기
      </S.ButtonBox>
    </S.Layout>
  );
};
