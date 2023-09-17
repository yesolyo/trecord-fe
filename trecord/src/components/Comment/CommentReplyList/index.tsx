import useGetReplyComment from '@/apis/Comment/getReplyComment';
import * as S from './style';
import { Fragment } from 'react';
import { Icon } from '@components/common/Icon';
import { CommentCateogory } from '../CommentCategory';
import { deletDataProps } from '../CommentModal';
interface Props {
  commentId: number;
  handleDeleteClick: ({}: deletDataProps) => void;
  onEdit: () => void;
  onCommentId: (id: number) => void;
  onDelete: () => void;
  isNewComment?: React.Dispatch<React.SetStateAction<boolean>>;
  onReplyEdit: () => void;
}
export const CommentReplyList = ({ ...props }: Props) => {
  const { data: ReplyData } = useGetReplyComment({
    commentId: props.commentId,
  });

  return (
    <S.Layout>
      {ReplyData &&
        ReplyData.map((user, index) => (
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
            {ReplyData.length !== index + 1 && <hr className="line_box" />}
          </Fragment>
        ))}
    </S.Layout>
  );
};
