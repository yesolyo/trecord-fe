import * as S from './style';
import { Fragment } from 'react';
import useGetReplyComment from '@/apis/Comment/getReplyComment';
import { ReplyCommentItem } from '../ReplyCommentItem';
import { CommentUserModalProps, GetComment } from '@/types/comment';

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
export const ReplyCommentList = ({ ...props }: Props) => {
  const { data: replyCommentData } = useGetReplyComment({
    commentId: props.commentData.commentId,
  });

  return (
    <S.Layout>
      {replyCommentData &&
        replyCommentData.content.map((r, index) => (
          <Fragment key={r.commentId}>
            {<ReplyCommentItem replyCommentData={r} {...props} />}
            {replyCommentData.content.length !== index + 1 && (
              <hr className="line_box" />
            )}
          </Fragment>
        ))}
    </S.Layout>
  );
};
