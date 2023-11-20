import * as S from './style';
import { Fragment } from 'react';
import { CommentUserModalProps, GetComment } from '@/types/comment';
import { Page } from '@/types';
import { CommentItem } from '../CommentItem';

interface commentListProps {
  commentData: Page<GetComment>;
  onSaveCommentId: (id: number) => void;
  onSaveCommentType: (v: string) => void;
  onSaveComment: (v: string) => void;
  onIsDeleteModalActive: () => void;
  selectCommentId: number;
  onClickUserProfile: ({
    imgUrl,
    nickName,
    content,
  }: CommentUserModalProps) => void;
}

export const CommentList = ({ ...props }: commentListProps) => {
  return (
    <S.Layout>
      {props.commentData.content.map((c, index) => (
        <Fragment key={c.commentId}>
          <CommentItem {...props} commentData={c} />
          {props.commentData.content.length !== index + 1 && (
            <hr className="line_box" />
          )}
        </Fragment>
      ))}
    </S.Layout>
  );
};
