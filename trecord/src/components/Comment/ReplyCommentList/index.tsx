import * as S from './style';
import { Fragment, useState } from 'react';
import useGetReplyComment from '@/apis/Comment/getReplyComment';
import Pagination from '@components/common/Pagination';
import { ReplyCommentItem } from '../ReplyCommentItem';
import { GetComment } from '@/types/comment';

interface Props {
  commentData: GetComment;
  onSaveCommentId: (id: number) => void;
  onSaveCommentType: (v: string) => void;
  onSaveComment: (v: string) => void;
  onIsDeleteModalActive: () => void;
  onSaveIsSuccess: (b: boolean) => void;
  selectCommentId: number;
}
export const ReplyCommentList = ({ ...props }: Props) => {
  const [pages, setPages] = useState(5);
  const { data: replyData } = useGetReplyComment({
    commentId: props.commentData.commentId,
    pageCount: pages,
  });

  const handleClickPage = () => {
    setPages((prev) => prev + 5);
  };

  return (
    <S.Layout>
      {replyData &&
        replyData.content.map((r, index) => (
          <Fragment key={r.commentId}>
            {<ReplyCommentItem replyData={r} {...props} />}
            {replyData.content.length !== index + 1 && (
              <hr className="line_box" />
            )}
          </Fragment>
        ))}
      {replyData && !replyData.last && (
        <Pagination text="댓글 더보기" onClick={handleClickPage} />
      )}
    </S.Layout>
  );
};
