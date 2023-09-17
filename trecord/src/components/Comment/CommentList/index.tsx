import { Icon } from '@components/common/Icon';
import * as S from './style';
import { Fragment } from 'react';
import { CommentCateogory } from '../CommentCategory';
import { CommentUserModalProps, GetCommentProps } from '@/types/comment';
import { deletDataProps } from '../CommentModal';

interface commentListProps {
  commentData: GetCommentProps[];
  onUserProfile: () => void;
  onUserProfileData: ({
    imgUrl,
    nickName,
    content,
  }: CommentUserModalProps) => void;
  handleDeleteClick: ({}: deletDataProps) => void;
  onEdit: () => void;
  onReplyEdit: () => void;
  onCommentId: (id: number) => void;
  onDelete: () => void;
  isNewComment?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CommentList = ({ ...props }: commentListProps) => {
  const handleUserProfile = ({ ...userProps }: CommentUserModalProps) => {
    props.onUserProfile();
    props.onUserProfileData({
      imgUrl: userProps.imgUrl,
      nickName: userProps.nickName,
      content: userProps.content,
    });
  };

  return (
    //TODO:이미지 반영 예정
    <S.Layout>
      {props.commentData.map((user, index) => (
        <Fragment key={user.commentId}>
          <S.CommentBox>
            {user.commenterImageUrl.length >= 1 ? (
              <img
                src={user.commenterImageUrl}
                className="user-img"
                onClick={() =>
                  handleUserProfile({
                    imgUrl: user.commenterImageUrl,
                    nickName: user.commenterNickname,
                    content: user.content,
                  })
                }
              />
            ) : (
              <Icon
                iconType="profile"
                width={28}
                onClick={() =>
                  handleUserProfile({
                    imgUrl: user.commenterImageUrl,
                    nickName: user.commenterNickname,
                    content: user.content,
                  })
                }
              />
            )}

            <S.CommentDataBox>
              <S.CommentMainDataBox>
                <div className="user_id">{user.commenterNickname}</div>
                <CommentCateogory id={user.commentId} {...props} />
              </S.CommentMainDataBox>
              <div className="user_data">{user.content}</div>
              <div className="user_date">{user.commentCreatedDate}</div>
              {user.replyCount > 0 && (
                <button className="reply_count">
                  {user.replyCount}개의 댓글 보기
                </button>
              )}
            </S.CommentDataBox>
          </S.CommentBox>
          {props.commentData.length !== index + 1 && <S.LineBox />}
        </Fragment>
      ))}
    </S.Layout>
  );
};
