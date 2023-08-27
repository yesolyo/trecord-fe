import { CommentList } from '@components/Comment/CommentList';
import { NavBarNew } from '@components/common/NavBar/NavBarNew';
import { TabBarComment } from '@components/common/TabBar/TabBarComment';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import * as S from './style';
import { useEffect, useState } from 'react';
import { GetCommentProps } from '@/types/comment';
import { getNewComment } from '@/apis/Comment/postNewComment';

export const Comment = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [comment, setComment] = useState<GetCommentProps[]>([]);
  const [isSend, setIsSend] = useState<boolean>(false);
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  //TODO:get 두번 보내는 에러 해결 필요
  useEffect(() => {
    getNewComment({ recordId: Number(id) }).then((data) => {
      setComment(data.comments);
    });
    return () => setIsSend(false);
  }, [isSend, isDelete]);

  const constant = {
    title: '댓글',
    isRegister: false,
    commentCount: comment.length,
    onClick: () => navigate(-1),
  };

  return (
    <S.Layout>
      <NavBarNew {...constant} />
      <CommentList
        commentData={comment}
        isDelete={setIsDelete}
        isEdit={setIsEdit}
      />
      <TabBarComment isSend={setIsSend} />
    </S.Layout>
  );
};
