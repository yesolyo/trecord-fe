import { CommentList } from '@components/Comment/CommentList';
import { NavBarNew } from '@components/common/NavBar/NavBarNew';
import { TabBarComment } from '@components/common/TabBar/TabBarComment';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './style';
import { useEffect, useState } from 'react';
import {
  CommentUserModalProps,
  GetCommentProps,
  deletDataProps,
  postDataProps,
  putDataProps,
} from '@/types/comment';
import {
  getNewComment,
  useDeleteNewComment,
  usePostNewComment,
  usePutNewComment,
} from '@/apis/Comment/postNewComment';
import { CommentUserModal } from '@components/Comment/CommentUserModal';

export const Comment = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { mutate: deleteComment } = useDeleteNewComment();
  const { mutate: postComment } = usePostNewComment();
  const { mutate: putComment } = usePutNewComment();
  const [comment, setComment] = useState<GetCommentProps[]>([]);
  const [newComment, setNewComment] = useState('');
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [commentId, setCommentId] = useState<number>(0);
  const [isUserProfile, setIsUserProfile] = useState<boolean>(false);
  const [userProfileData, setUserProfileData] = useState<CommentUserModalProps>(
    { imgUrl: '', nickName: '', content: '' },
  );

  useEffect(() => {
    HandleGetData();
  }, []);

  const HandleGetData = () => {
    getNewComment({ recordId: Number(id) }).then((data) => {
      setComment(data.comments);
    });
  };

  const HandleDeleteData = ({ id }: deletDataProps) => {
    deleteComment(
      {
        commentId: id,
      },
      {
        onSuccess: () => {
          HandleGetData();
        },
      },
    );
  };

  const HandlePostData = ({ id, comment }: postDataProps) => {
    const getToken = localStorage.getItem('acessToken');

    if (getToken) {
      postComment(
        {
          recordId: Number(id),
          content: comment,
        },
        {
          onSuccess: () => {
            HandleGetData();
            setNewComment('');
          },
        },
      );
    }
  };

  const HandlePutData = ({ id, content }: putDataProps) => {
    const getToken = localStorage.getItem('acessToken');
    if (getToken) {
      putComment(
        {
          commentId: id,
          content: content,
        },
        {
          onSuccess: () => {
            HandleGetData();
            setNewComment('');
          },
        },
      );
    }
  };

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
        isUserProfile={setIsUserProfile}
        userProfileData={setUserProfileData}
        handleDeleteClick={HandleDeleteData}
        commentId={setCommentId}
        isEdit={setIsEdit}
      />

      <TabBarComment
        newCommentValue={newComment}
        newComment={setNewComment}
        handlePostNewComment={HandlePostData}
        handlePutNewComment={HandlePutData}
        isEditValue={isEdit}
        commentId={commentId}
        isEdit={setIsEdit}
      />
    </S.Layout>
  );
};
