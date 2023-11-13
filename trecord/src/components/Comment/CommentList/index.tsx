import * as S from './style';
import { Fragment } from 'react';
import { GetComment } from '@/types/comment';
import Pagination from '@components/common/Pagination';
import { Page } from '@/types';
import { CommentItem } from '../CommentItem';

interface commentListProps {
  commentData: Page<GetComment>;
  onSaveCommentId: (id: number) => void;
  onSaveCommentType: (v: string) => void;
  onSaveComment: (v: string) => void;
}

export const CommentList = ({
  commentData,
  onSaveCommentId,
  onSaveCommentType,
  onSaveComment,
}: commentListProps) => {
  return (
    <S.Layout>
      {commentData.content.map((c, index) => (
        <Fragment key={c.commentId}>
          <CommentItem
            commentData={c}
            onSaveCommentId={onSaveCommentId}
            onSaveCommentType={onSaveCommentType}
            onSaveComment={onSaveComment}
          />
          {commentData.content.length !== index + 1 && (
            <hr className="line_box" />
          )}
        </Fragment>
      ))}
      {!commentData.last && <Pagination text="댓글 더보기" />}
    </S.Layout>
  );
};
