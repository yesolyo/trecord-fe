import { Icon } from '@components/common/Icon';
import * as S from './style';
import { Fragment, useEffect, useState } from 'react';
import { CommentCateogory } from '../CommentCategory';
import { getNewComment } from '@/apis/Comment/postNewComment';
import { useParams } from 'react-router-dom';
import { GetCommentProps } from '@/types/comment';

interface commentListProps {
  commentData: GetCommentProps[];
}

export const CommentList = ({ commentData }: commentListProps) => {
  return (
    //TODO:api 변경되면 날짜, 닉네임 , 이미지 반영 예정
    <S.Layout>
      {commentData.map((user, index) => (
        <Fragment key={user.commentId}>
          <S.CommentBox>
            <Icon iconType="profile" width={28} />
            <S.CommentDataBox>
              <S.CommentMainDataBox>
                <div className="user_id">{user.commenterNickname}</div>
                <CommentCateogory />
              </S.CommentMainDataBox>
              <div className="user_data">{user.content}</div>
              <div className="user_date">{user.commentCreatedDate}</div>
            </S.CommentDataBox>
          </S.CommentBox>
          {commentData.length !== index + 1 && <S.LineBox />}
        </Fragment>
      ))}
    </S.Layout>
  );
};
