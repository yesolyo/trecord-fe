import { useState } from 'react';
import * as S from './style';
import { useDeleteNewComment } from '@/apis/Comment/postNewComment';

interface commentModalProps {
  id: number;
  handleDeleteClick: ({}: deletDataProps) => void;
  isEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface deletDataProps {
  id: number;
}
export const CommentModal = ({ ...props }: commentModalProps) => {
  return (
    <S.Layout>
      <S.ButtonBox onClick={() => props.isEdit(true)}>수정하기</S.ButtonBox>
      <S.LineBox />
      <S.ButtonBox onClick={() => props.handleDeleteClick({ id: props.id })}>
        삭제하기
      </S.ButtonBox>
    </S.Layout>
  );
};
