import * as S from './style';
import { Fragment } from 'react';
import { Icon } from '@components/common/Icon';
import { CommentCateogory } from '../CommentCategory';
import { deletDataProps } from '../CommentModal';
import useGetReplyComment from '@/apis/Comment/getReplyComment';
interface Props {
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
  const { data: ReplyData } = useGetReplyComment({
    commentId: props.commentId,
  });

  return (
    <S.Layout>
      {ReplyData &&
        ReplyData.content.map((user, index) => (
          <Fragment key={user.commentId}>
            <div className="reply_box">
              {user.commenterImageUrl.length > 0 ? (
                <img src={user.commenterImageUrl} className="user-img" />
              ) : (
                <Icon iconType="profile" width={28} />
              )}

              <div className="content_box">
                <div className="conetent_title">
                  <div className="user_id">{user.commenterNickname}</div>
                  {user.isUpdatable && (
                    <CommentCateogory
                      id={user.commentId}
                      editText="수정하기"
                      deleteText="삭제하기"
                      {...props}
                    />
                  )}
                </div>
                <div className="user_data">{user.content}</div>
                <div className="user_date">{user.createdDateTime}</div>
              </div>
            </div>
            {ReplyData.content.length !== index + 1 && (
              <hr className="line_box" />
            )}
          </Fragment>
        ))}
    </S.Layout>
  );
};
