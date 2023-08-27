import { CommentList } from '@components/Comment/CommentList';
import { NavBarNew } from '@components/common/NavBar/NavBarNew';
import { TabBarComment } from '@components/common/TabBar/TabBarComment';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import * as S from './style';
import { useEffect, useState } from 'react';
import { CommentUserModalProps, GetCommentProps } from '@/types/comment';
import { getNewComment } from '@/apis/Comment/postNewComment';
import { CommentUserModal } from '@components/Comment/CommentUserModal';

export const Comment = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [comment, setComment] = useState<GetCommentProps[]>([]);
  const [isSend, setIsSend] = useState<boolean>(false);
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isUserProfile, setIsUserProfile] = useState<boolean>(false);
  const [userProfileData, setUserProfileData] = useState<CommentUserModalProps>(
    { imgUrl: '', nickName: '', content: '' },
  );
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
  //TODO: commentUserModal창이 나오면 댓글이 사라지는 현상 고침 필요
  return (
    <S.Layout>
      {isUserProfile && <S.DimBox />}
      {isUserProfile && (
        <CommentUserModal
          isUserProfile={setIsUserProfile}
          {...userProfileData}
        />
      )}
      <NavBarNew {...constant} />
      <CommentList
        commentData={comment}
        isDelete={setIsDelete}
        isEdit={setIsEdit}
        isUserProfile={setIsUserProfile}
        userProfileData={setUserProfileData}
      />

      <TabBarComment isSend={setIsSend} />
    </S.Layout>
  );
};
