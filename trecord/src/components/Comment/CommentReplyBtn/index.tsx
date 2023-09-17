import styled from 'styled-components';
import { CommentReplyList } from '../CommentReplyList';
import useGetReplyComment from '@/apis/Comment/getReplyComment';
import { deletDataProps } from '../CommentModal';
import { useEffect } from 'react';

const Layout = styled.button`
  ${({ theme }) => theme.font.fontSize.Caption_S}
  ${({ theme }) => theme.font.fontType.R};
  background: none;
  border: none;
  display: flex;
  padding: 0;
`;

interface Props {
  replyCount: number;
  commentId: number;
  isReplyComment: boolean;
  onClick: () => void;
  handleDeleteClick: ({}: deletDataProps) => void;
  onEdit: () => void;
  isEdit: boolean;
  onCommentId: (id: number) => void;
  onDelete: () => void;
  isDelete: boolean;
  isNewComment?: React.Dispatch<React.SetStateAction<boolean>>;
  onReplyEdit: () => void;
  isReplyEdit: boolean;
}
export const CommentReplyBtn = ({ ...props }: Props) => {
  const { data: ReplyData, refetch } = useGetReplyComment({
    commentId: props.commentId,
  });
  useEffect(() => {
    refetch();
  }, [props.replyCount, props.isEdit]);
  return (
    <>
      <Layout onClick={props.onClick}>{props.replyCount}개의 댓글 보기</Layout>
      {props.isReplyComment && ReplyData && (
        <CommentReplyList replyData={ReplyData?.content} {...props} />
      )}
    </>
  );
};
