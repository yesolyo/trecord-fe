import * as S from './style';
import { useParams } from 'react-router-dom';
import { postNewCommentProps } from '@/types/comment';
import { SquareBtn } from '@components/common/SquareBtn';
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
      <SquareBtn
        size="s"
        title="등록"
        isDark={true}
        disabled={newComment.length <= 0}
        onClick={() =>
          onPostNewComment({ id: Number(id), content: newComment })
        }
      />
    </S.Layout>
  );
};
