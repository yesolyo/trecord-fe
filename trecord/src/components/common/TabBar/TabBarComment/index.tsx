import * as S from './style';
import { SquareButton } from '@components/common/button/SquareButton';
import { useParams } from 'react-router-dom';
import { postDataProps, putDataProps } from '@/types/comment';
interface tabBarCommentProps {
  newCommentValue: string;
  newComment: React.Dispatch<React.SetStateAction<string>>;
  handlePostNewComment: ({ id, comment }: postDataProps) => void;
  handlePutNewComment: ({ id, content }: putDataProps) => void;
  isEditValue: boolean;
  isEdit: React.Dispatch<React.SetStateAction<boolean>>;
  commentId: number;
}
export const TabBarComment = ({
  newCommentValue,
  newComment,
  handlePostNewComment,
  handlePutNewComment,
  isEditValue,
  isEdit,
  commentId,
}: tabBarCommentProps) => {
  const { id } = useParams();

  return (
    <S.Layout>
      <S.InputBox
        isEdit={isEditValue}
        placeholder="댓글을 남겨보세요"
        value={newCommentValue}
        onChange={(e) => newComment(e.target.value)}
      />
      {isEditValue ? (
        <S.EditBox>
          <S.ButtonPrevBox isDark={true} onClick={() => isEdit(false)}>
            취소
          </S.ButtonPrevBox>
          <S.ButtonNextBox
            isDark={true}
            onClick={() => {
              handlePutNewComment({ id: commentId, content: newCommentValue });
              isEdit(false);
            }}
            disabled={newCommentValue.length <= 0}
          >
            등록
          </S.ButtonNextBox>
        </S.EditBox>
      ) : (
        <SquareButton
          title="등록"
          width="61px"
          height="48px"
          isDark={true}
          disabled={newCommentValue.length <= 0}
          onClick={() =>
            handlePostNewComment({ id: Number(id), comment: newCommentValue })
          }
        />
      )}
    </S.Layout>
  );
};
