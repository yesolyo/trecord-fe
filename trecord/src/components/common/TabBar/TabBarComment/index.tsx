import * as S from './style';
import { SquareButton } from '@components/common/button/SquareButton';
import { useParams } from 'react-router-dom';
import { postNewCommentProps, putDataProps } from '@/types/comment';
import { postReplyCommentProps } from '@/apis/Comment/postReplyComment';
import { TabBarCommentEdit } from './TabBarCommentEdit';
interface tabBarCommentProps {
  newComment: string;
  onNewComment: (content: string) => void;
  onPostNewComment: ({ id, content }: postNewCommentProps) => void;
  onPutNewComment: ({ id, content }: putDataProps) => void;
  onPostReplyComment: ({
    recordId,
    parentId,
    content,
  }: postReplyCommentProps) => void;
  onClose: () => void;
  isEdit: boolean;
  isReply: boolean;
  commentId: number;
}
export const TabBarComment = ({
  newComment,
  onNewComment,
  onPostNewComment,
  onPutNewComment,
  onPostReplyComment,
  isEdit,
  isReply,
  onClose,
  commentId,
}: tabBarCommentProps) => {
  const { id } = useParams();

  const button_Type = () => {
    if (isEdit)
      return (
        <TabBarCommentEdit
          closeText="취소"
          confirmText="등록"
          disabled={newComment.length <= 0}
          onClose={onClose}
          onConfirm={() =>
            onPutNewComment({
              id: commentId,
              content: newComment,
            })
          }
        />
      );
    else if (isReply)
      return (
        <TabBarCommentEdit
          closeText="취소"
          confirmText="등록"
          disabled={newComment.length <= 0}
          onClose={onClose}
          onConfirm={() =>
            onPostReplyComment({
              recordId: Number(id),
              parentId: commentId,
              content: newComment,
            })
          }
        />
      );
    else
      return (
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
      );
  };

  return (
    <S.Layout>
      <S.InputBox
        isEdit={isEdit}
        placeholder="댓글을 남겨보세요"
        value={newComment}
        onChange={(e) => onNewComment(e.target.value)}
      />
      {button_Type()}
    </S.Layout>
  );
};
