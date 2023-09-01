import { getMypageComment } from '@/apis/Comment/getMypageComment';
import { GetMypageCommentResponse } from '@/types/comment';
import { NavBarBackBtn } from '@components/common/NavBar/NavBarBackBtn';
import { NavBarNew } from '@components/common/NavBar/NavBarNew';
import { useEffect, useState } from 'react';
import * as S from './style';
import { MypageCommentList } from '@components/MypageComment/MypageCommentList';
export const MyPageComment = () => {
  const [comment, setComment] = useState<GetMypageCommentResponse>();
  useEffect(() => {
    getMypageComment().then((data) => {
      setComment(data);
    });
  }, []);
  console.log(comment);
  return (
    <S.Layout>
      <NavBarNew title="댓글" isRegister={false} />
      {comment && <MypageCommentList {...comment} />}
    </S.Layout>
  );
};
