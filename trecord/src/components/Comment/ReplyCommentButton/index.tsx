import { CommentUserModalProps, GetComment } from '@/types/comment';
import { useState } from 'react';
import { ReplyCommentList } from '../ReplyCommentList';
import * as S from './style';
interface Props {
  commentData: GetComment;
  onSaveCommentId: (id: number) => void;
  onSaveCommentType: (v: string) => void;
  onSaveComment: (v: string) => void;
  onIsDeleteModalActive: () => void;
  onClickUserProfile: ({
    imgUrl,
    nickName,
    content,
  }: CommentUserModalProps) => void;
  selectCommentId: number;
}
export const ReplyCommentButton = ({ ...props }: Props) => {
  const [hasReplyComment, sethasReplyComment] = useState<boolean>(false);
  return (
    <>
      <S.Layout onClick={() => sethasReplyComment((prev) => !prev)}>
        {props.commentData.replyCount}개의 댓글 보기
      </S.Layout>
      {hasReplyComment && <ReplyCommentList {...props} />}
    </>
  );
};
