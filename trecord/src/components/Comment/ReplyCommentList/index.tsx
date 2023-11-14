import * as S from './style';
import { Fragment, useEffect, useState } from 'react';
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
  isSuccess: boolean;
}
export const ReplyCommentList = ({ ...props }: Props) => {
  const [pages, setPages] = useState(5);
  const { data: replyData, refetch } = useGetReplyComment({
    commentId: props.commentData.commentId,
    pageCount: pages,
  });
  const handleClickPage = () => {
    setPages((prev) => prev + 5);
  };
  //TODO:2번 get해오는 문제 해결 필요

  useEffect(() => {
    if (props.isSuccess) {
      refetch();
      props.onSaveIsSuccess(false);
    }
  }, [props.isSuccess]);

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
