import { Icon } from '@components/common/Icon';
import * as S from './style';
import { SquareButton } from '@components/common/button/SquareButton';
import { useState } from 'react';
import { usePostNewComment } from '@/apis/Comment/postNewComment';
import { useParams } from 'react-router-dom';
export const TabBarComment = () => {
  const { id } = useParams();
  const [comment, setComment] = useState('');
  const { mutate } = usePostNewComment();
  const postData = () => {
    const getToken = localStorage.getItem('acessToken');

    if (getToken) {
      mutate(
        {
          recordId: Number(id),
          content: comment,
        },
        {
          onSuccess: (data) => {
            console.log('data전송성공', data);
          },
        },
      );
    }
  };
  return (
    <S.Layout>
      <Icon iconType="profile" width={28} />
      <S.InputBox
        placeholder="댓글을 남겨보세요"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <SquareButton
        title="등록"
        width="61px"
        height="48px"
        isDark={true}
        disabled={comment.length <= 0}
        onClick={postData}
      />
    </S.Layout>
  );
};
