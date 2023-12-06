import * as S from './style';
import { Fragment } from 'react';
import { ReplyCommentItem } from '../ReplyCommentItem';
import { CommentUserModalProps, GetComment } from '@/types/comment';
import { useReplyCommentInfiniteQuery } from '@/apis';
import Pagination from '@components/common/Pagination';

interface Props {
  commentData: GetComment;
  onSaveCommentId: (id: number) => void;
  onSaveCommentType: (v: string) => void;
  onSaveComment: (v: string) => void;
  onIsDeleteModalActive: () => void;
  onClickUserProfile: ({
    imgUrl,
    nickName,
    content,
  }: CommentUserModalProps) => void;
  selectCommentId: number;
}
export const ReplyCommentList = ({ ...props }: Props) => {
  const {
    data: replyCommentListData,
    hasNextPage,
    isFetching,
    fetchNextPage,
  } = useReplyCommentInfiniteQuery({
    commentId: props.commentData.commentId,
  });

  return (
    <S.Layout>
      {replyCommentListData &&
        replyCommentListData.pages.map((page, pageIndex) =>
          page.content.map((replyComment, replyCommentIndex) => (
            <Fragment key={replyComment.commentId}>
              {<ReplyCommentItem replyCommentData={replyComment} {...props} />}
              {replyCommentListData.pages[replyCommentListData.pages.length - 1]
                .content[page.content.length - 1] !==
                replyCommentListData.pages[pageIndex].content[
                  replyCommentIndex
                ] && <hr className="line" />}
            </Fragment>
          )),
        )}
      {hasNextPage && (
        <Pagination
          text="대댓글 더보기"
          loading={isFetching}
          onClick={() => fetchNextPage()}
        />
      )}
    </S.Layout>
  );
};
