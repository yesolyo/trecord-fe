import * as S from './style';
import { Fragment } from 'react';
import { CommentUserModalProps, GetComment } from '@/types/comment';
import { Page } from '@/types';
import { CommentItem } from '../CommentItem';
import { InfiniteData } from '@tanstack/react-query';
import Pagination from '@components/common/Pagination';

interface commentListProps {
  commentData: InfiniteData<Page<GetComment>>;
  paginationLoading?: boolean | undefined;
  paginationHasNextPage: boolean | undefined;
  onClickPagination: () => void;
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

export const CommentList = ({
  commentData,
  paginationHasNextPage,
  paginationLoading,
  onClickPagination,
  ...props
}: commentListProps) => {
  return (
    <S.Layout>
      {commentData.pages.map((page, pageIndex) =>
        page.content.map((comment, commentIndex) => (
          <Fragment key={comment.commentId}>
            <CommentItem {...props} commentData={comment} />
            {commentData.pages[commentData.pages.length - 1].content[
              page.content.length - 1
            ] !== commentData.pages[pageIndex].content[commentIndex] && (
              <hr className="line" />
            )}
          </Fragment>
        )),
      )}
      {paginationHasNextPage && (
        <Pagination
          text="댓글 더보기"
          loading={paginationLoading}
          onClick={() => onClickPagination()}
        />
      )}
    </S.Layout>
  );
};
