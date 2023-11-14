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
  onIsDeleteModalActive: () => void;
  onSaveIsSuccess: (b: boolean) => void;
  onClickPageCount: () => void;
  isSuccess: boolean;
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
      {!props.commentData.last && (
        <Pagination text="댓글 더보기" onClick={props.onClickPageCount} />
      )}
    </S.Layout>
  );
};
