import { CommentReplyList } from '../CommentReplyList';
import { deletDataProps } from '../CommentModal';
import { useState } from 'react';
import * as S from './style';
interface Props {
  replyCount: number;
  userCommentId: number;
  handleDeleteClick: ({}: deletDataProps) => void;
  onEdit: () => void;
  isEdit: boolean;
  onCommentId: (id: number) => void;
  onDelete: () => void;
  isDelete: boolean;
  isNewComment?: React.Dispatch<React.SetStateAction<boolean>>;
  onReplyEdit: () => void;
  isReplyEdit: boolean;
  handleNewComment: (val: string) => void;
}
export const CommentReplyBtn = ({ ...props }: Props) => {
  const [isReplyComment, setIsReplyComment] = useState<boolean>(false);
  return (
    <>
      <S.Layout onClick={() => setIsReplyComment((prev) => !prev)}>
        {props.replyCount}개의 댓글 보기
      </S.Layout>
      {isReplyComment && <CommentReplyList {...props} />}
    </>
  );
};
