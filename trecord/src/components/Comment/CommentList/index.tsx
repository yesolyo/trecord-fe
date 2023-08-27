import { Icon } from '@components/common/Icon';
import * as S from './style';
import { Fragment, useEffect, useState } from 'react';
import { CommentCateogory } from '../CommentCategory';
import {
  getNewComment,
  useDeleteNewComment,
} from '@/apis/Comment/postNewComment';
import { useNavigate, useParams } from 'react-router-dom';
import { GetCommentProps } from '@/types/comment';

interface commentListProps {
  commentData: GetCommentProps[];
  isEdit: React.Dispatch<React.SetStateAction<boolean>>;
  isDelete: React.Dispatch<React.SetStateAction<boolean>>;
}
// interface deleteDataProps {
//   id: number;
// }
export const CommentList = ({ ...props }: commentListProps) => {
  return (
    //TODO:이미지 반영 예정
    <S.Layout>
      {props.commentData.map((user, index) => (
        <Fragment key={user.commentId}>
          <S.CommentBox>
            <Icon iconType="profile" width={28} />
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
