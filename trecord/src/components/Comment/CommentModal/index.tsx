import { useState } from 'react';
import * as S from './style';
import { useDeleteNewComment } from '@/apis/Comment/postNewComment';

interface commentModalProps {
  id: number;
  isEdit: React.Dispatch<React.SetStateAction<boolean>>;
  isDelete: React.Dispatch<React.SetStateAction<boolean>>;
}

interface deletDataProps {
  id: number;
  isDelete: React.Dispatch<React.SetStateAction<boolean>>;
}
export const CommentModal = ({ ...props }: commentModalProps) => {
  // const { mutate } = useDeleteNewComment();
  // const HandleDeleteData = ({ id }: deletDataProps) => {
  //   mutate(
  //     {
  //       commentId: id,
  //     },
  //     {
  //       onSuccess: (data) => {
  //         console.log('성공', data);
  //       },
  //     },
  //   );
  // };

  const HandleDeleteData = ({ id, isDelete }: deletDataProps) => {
    const getToken = localStorage.getItem('acessToken');
    if (getToken) {
      fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/comments`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: getToken,
        },
        body: JSON.stringify({
          commentId: id,
        }),
      })
        .then(() => {
          isDelete(true);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <S.Layout>
      <S.ButtonBox>수정하기</S.ButtonBox>
      <S.LineBox />
      <S.ButtonBox
        onClick={() =>
          HandleDeleteData({ id: props.id, isDelete: props.isDelete })
        }
      >
        삭제하기
      </S.ButtonBox>
    </S.Layout>
  );
};
