import { GetMypageCommentResponse } from '@/types/comment';
import { Icon } from '@components/common/Icon';
import * as S from './style';
import { Fragment } from 'react';

export const MypageCommentList = ({ ...props }: GetMypageCommentResponse) => {
  return (
    <S.Layout>
      {props.content.map((comment, index) => (
        <Fragment key={comment.commentId}>
          <S.CommentBox>
            <Icon iconType="message" width={24} />
            <S.TextBox>
              <S.ContentBox>{comment.content}</S.ContentBox>
              <S.DateBox>{comment.commentCreatedDateTime}</S.DateBox>
            </S.TextBox>
            <Icon
              iconType="close"
              width={24}
              onClick={() => {
                props.commentData(comment.commentId);
                props.onClickModal(true);
              }}
            />
          </S.CommentBox>
          {props.content.length - 1 !== index && <S.LineBox />}
        </Fragment>
      ))}
    </S.Layout>
  );
};
