import * as S from './style';
import { Fragment } from 'react';
import { Icon } from '@components/common/Icon';
import { CommentCateogory } from '../CommentCategory';
import { deletDataProps } from '../CommentModal';
import { GetReplyCommentProps } from '@/types/comment';
interface Props {
  replyData: GetReplyCommentProps[];
  commentId: number;
  handleDeleteClick: ({}: deletDataProps) => void;
  onEdit: () => void;
  isEdit: boolean;
  onCommentId: (id: number) => void;
  onDelete: () => void;
  isDelete: boolean;
  isNewComment?: React.Dispatch<React.SetStateAction<boolean>>;
  onReplyEdit: () => void;
  isReplyEdit: boolean;
}
export const CommentReplyList = ({ ...props }: Props) => {
  return (
    <S.Layout>
      {props.replyData &&
        props.replyData.map((user, index) => (
          <Fragment key={user.commentId}>
            <div className="reply_box">
              <Icon iconType="profile" width={28} />
              <div className="content_box">
                <div className="conetent_title">
                  <div className="user_id">{user.commentId}</div>
                  <CommentCateogory
                    id={user.commentId}
                    editText="수정하기"
                    deleteText="삭제하기"
                    {...props}
                  />
                </div>
                <div className="user_data">{user.content}</div>
                <div className="user_date">{user.createdDateTime}</div>
              </div>
            </div>
            {props.replyData.length !== index + 1 && (
              <hr className="line_box" />
            )}
          </Fragment>
        ))}
    </S.Layout>
  );
};
