import { Icon } from '@components/common/Icon';
import * as S from './style';
import { SquareButton } from '@components/common/button/SquareButton';
import { useState } from 'react';
import { usePostNewComment } from '@/apis/Comment/postNewComment';
import { useParams } from 'react-router-dom';
import { postDataProps } from '@/types/comment';
interface tabBarCommentProps {
  newCommentValue: string;
  newComment: React.Dispatch<React.SetStateAction<string>>;
  handlePostNewComment: ({ id, comment }: postDataProps) => void;
}
export const TabBarComment = ({
  newCommentValue,
  newComment,
  handlePostNewComment,
}: tabBarCommentProps) => {
  const { id } = useParams();
  return (
    <S.Layout>
      <S.InputBox
        placeholder="댓글을 남겨보세요"
        value={newCommentValue}
        onChange={(e) => newComment(e.target.value)}
      />
      <SquareButton
        title="등록"
        width="61px"
        height="48px"
        isDark={true}
        disabled={newCommentValue.length <= 0}
        onClick={() =>
          handlePostNewComment({ id: Number(id), comment: newCommentValue })
        }
      />
    </S.Layout>
  );
};
