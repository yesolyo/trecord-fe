import { Icon } from '@components/common/Icon';
import * as S from './style';
import { Fragment } from 'react';
import { CommentCateogory } from '../CommentCategory';
import { CommentUserModalProps, GetComment } from '@/types/comment';
import { deletDataProps } from '../CommentModal';
import { CommentReplyBtn } from '../CommentReplyBtn';
import Pagination from '@components/common/Pagination';
import { replaceDate } from '@/utils/replaceDate';
import { Page } from '@/types';

interface commentListProps {
  commentData: Page<GetComment>;
  onUserProfile: () => void;
  onUserProfileData: ({
    imgUrl,
    nickName,
    content,
  }: CommentUserModalProps) => void;
  handleDeleteClick: ({}: deletDataProps) => void;
  onEdit: () => void;
  isEdit: boolean;
  onReplyEdit: () => void;
  isReplyEdit: boolean;
  onCommentId: (id: number) => void;
  onDelete: () => void;
  onCountPage: () => void;
  handleNewComment: (val: string) => void;
  isDelete: boolean;
  commentId: number;
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
      {props.commentData.content.map((user, index) => (
        <Fragment key={user.commentId}>
          <div
            className={
              props.commentId === user.commentId && props.isReplyEdit
                ? 'comment_box choice'
                : 'comment_box'
            }
          >
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
                {user.isUpdatable && (
                  <CommentCateogory
                    id={user.commentId}
                    newComment={user.content}
                    editText="수정하기"
                    replyText="답글달기"
                    deleteText="삭제하기"
                    {...props}
                  />
                )}
              </S.CommentMainDataBox>
              <div className="user_data">{user.content}</div>
              <div className="user_date">
                {replaceDate({ date: user.commentCreatedDate })}
              </div>
              {user.replyCount > 0 && (
                <CommentReplyBtn
                  replyCount={user.replyCount}
                  userCommentId={user.commentId}
                  {...props}
                />
              )}
            </S.CommentDataBox>
          </div>
          {props.commentData.content.length !== index + 1 && (
            <hr className="line_box" />
          )}
        </Fragment>
      ))}
      {!props.commentData.last && (
        <Pagination text="댓글 더보기" onClick={props.onCountPage} />
      )}
    </S.Layout>
  );
};
