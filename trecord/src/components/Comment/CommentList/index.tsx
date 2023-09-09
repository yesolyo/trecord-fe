import { Icon } from '@components/common/Icon';
import * as S from './style';
import { Fragment } from 'react';
import { CommentCateogory } from '../CommentCategory';
import { CommentUserModalProps, GetCommentProps } from '@/types/comment';
import { deletDataProps } from '../CommentModal';

interface commentListProps {
  commentData: GetCommentProps[];
  isUserProfile: React.Dispatch<React.SetStateAction<boolean>>;
  userProfileData: React.Dispatch<React.SetStateAction<CommentUserModalProps>>;
  handleDeleteClick: ({}: deletDataProps) => void;
  isEdit: React.Dispatch<React.SetStateAction<boolean>>;
  commentId: React.Dispatch<React.SetStateAction<number>>;
  isDelete: React.Dispatch<React.SetStateAction<boolean>>;
  isNewComment: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CommentList = ({ ...props }: commentListProps) => {
  const handleUserProfile = ({ ...userProps }: CommentUserModalProps) => {
    props.isUserProfile(true);
    props.userProfileData({
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
            <S.CommentDataBox>
              <S.CommentMainDataBox>
                <div className="user_id">{user.commenterNickname}</div>
                <CommentCateogory id={user.commentId} {...props} />
              </S.CommentMainDataBox>
              <div className="user_data">{user.content}</div>
              <div className="user_date">{user.commentCreatedDate}</div>
            </S.CommentDataBox>
          </S.CommentBox>
          {props.commentData.length !== index + 1 && <S.LineBox />}
        </Fragment>
      ))}
    </S.Layout>
  );
};
