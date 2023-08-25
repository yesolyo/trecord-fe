import { Icon } from '@components/common/Icon';
import * as S from './style';
import { SquareButton } from '@components/common/button/SquareButton';
import { useState } from 'react';
export const TabBarComment = () => {
  const [comment, setComment] = useState('');
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
      />
    </S.Layout>
  );
};
