import styled from 'styled-components';
import { CommentReplyList } from '../CommentReplyList';
import { deletDataProps } from '../CommentModal';
import { useState } from 'react';

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
  const [isReplyComment, setIsReplyComment] = useState<boolean>(false);
  return (
    <>
      <Layout onClick={() => setIsReplyComment((prev) => !prev)}>
        {props.replyCount}개의 댓글 보기
      </Layout>
      {isReplyComment && <CommentReplyList {...props} />}
    </>
  );
};
