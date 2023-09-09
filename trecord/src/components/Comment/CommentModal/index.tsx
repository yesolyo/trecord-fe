import * as S from './style';

interface commentModalProps {
  id: number;
  handleDeleteClick: ({}: deletDataProps) => void;
  isEdit: React.Dispatch<React.SetStateAction<boolean>>;
  commentId: React.Dispatch<React.SetStateAction<number>>;
  isDelete: React.Dispatch<React.SetStateAction<boolean>>;
  isNewComment: React.Dispatch<React.SetStateAction<boolean>>;
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
        }}
      >
        수정하기
      </S.ButtonBox>
      <S.LineBox />
      <S.ButtonBox
        onClick={() => {
          props.isDelete(true);
        }}
      >
        삭제하기
      </S.ButtonBox>
      <S.LineBox />
      <S.ButtonBox>답글달기</S.ButtonBox>
    </S.Layout>
  );
};
