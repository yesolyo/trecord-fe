import * as S from './style';
import { SquareButton } from '@components/common/button/SquareButton';
import { useParams } from 'react-router-dom';
import { postNewCommentProps, putDataProps } from '@/types/comment';
interface Props {
  newComment: string;
  onNewComment: (content: string) => void;
  onPostNewComment: ({ id, content }: postNewCommentProps) => void;
}
export const TabBarNewComment = ({
  newComment,
  onNewComment,
  onPostNewComment,
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
      <SquareButton
        title="등록"
        width="61px"
        height="48px"
        isDark={true}
        disabled={newComment.length <= 0}
        onClick={() =>
          onPostNewComment({ id: Number(id), content: newComment })
        }
      />
    </S.Layout>
  );
};
