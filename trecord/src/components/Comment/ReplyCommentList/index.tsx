import * as S from './style';
import { Fragment } from 'react';
import useGetReplyComment from '@/apis/Comment/getReplyComment';
import Pagination from '@components/common/Pagination';
import { ReplyCommentItem } from '../ReplyCommentItem';
interface Props {
  commentId: number;
  onSaveCommentId: (id: number) => void;
  onSaveCommentType: (v: string) => void;
}
export const ReplyCommentList = ({
  commentId,
  onSaveCommentId,
  onSaveCommentType,
}: Props) => {
  const { data: replyData, refetch } = useGetReplyComment({
    commentId: commentId,
    pageCount: 5,
  });
  return (
    <S.Layout>
      {replyData &&
        replyData.content.map((r, index) => (
          <Fragment key={r.commentId}>
            {
              <ReplyCommentItem
                replyData={r}
                onSaveCommentType={onSaveCommentType}
                onSaveCommentId={onSaveCommentId}
              />
            }
            {replyData.content.length !== index + 1 && (
              <hr className="line_box" />
            )}
          </Fragment>
        ))}
      {replyData && !replyData.last && <Pagination text="댓글 더보기" />}
    </S.Layout>
  );
};
