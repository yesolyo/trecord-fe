import { CommentList } from '@components/Comment/CommentList';
import { NavBarNew } from '@components/common/NavBar/NavBarNew';
import { CommentUserModal } from '@components/Comment/CommentUserModal';
import Modal from '@components/common/Modal';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import {
  CommentUserModalProps,
  deletDataProps,
  postNewCommentProps,
  putDataProps,
} from '@/types/comment';
import {
  useDeleteNewComment,
  usePostNewComment,
  usePutNewComment,
} from '@/apis/Comment/postNewComment';
import useGetNewComment from '@/apis/Comment/getNewComment';
import usePostReplyComment, {
  postReplyCommentProps,
} from '@/apis/Comment/postReplyComment';
import { TabBarNewComment } from '@components/common/TabBar/TabBarComment/TabBarNewComment';
import { TabBarEditComment } from '@components/common/TabBar/TabBarComment/TabBarEditComment';
import { TabBarReplyComment } from '@components/common/TabBar/TabBarComment/TabBarReplyComment';

export const Comment = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { mutate: deleteComment } = useDeleteNewComment();
  const { mutate: postComment } = usePostNewComment();
  const { mutate: putComment } = usePutNewComment();
  const { mutate: postReplyComment } = usePostReplyComment();
  const [newComment, setNewComment] = useState<string>('');
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isReplyEdit, setIsReplyEdit] = useState<boolean>(false);
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [commentId, setCommentId] = useState<number>(0);
  const [isUserProfile, setIsUserProfile] = useState<boolean>(false);
  const [userProfileData, setUserProfileData] = useState<CommentUserModalProps>(
    { imgUrl: '', nickName: '', content: '' },
  );
  const [pages, setPages] = useState<number>(0);

  const { data: newCommentData, refetch } = useGetNewComment({
    recordId: Number(id),
    page: pages,
  });

  const handlePostNewData = ({ id, content }: postNewCommentProps) => {
    postComment(
      {
        recordId: Number(id),
        content,
      },
      {
        onSuccess: () => {
          refetch();
          setNewComment('');
        },
      },
    );
  };

  const handlePostReplyData = ({
    recordId,
    parentId,
    content,
  }: postReplyCommentProps) => {
    postReplyComment(
      {
        recordId,
        parentId,
        content,
      },
      {
        onSuccess: () => {
          refetch();
          handleReplyEdit();
          setNewComment('');
        },
      },
    );
  };

  const handlePutData = ({ id, content }: putDataProps) => {
    putComment(
      {
        commentId: id,
        content: content,
      },
      {
        onSuccess: () => {
          refetch();
          handleEdit();
          setNewComment('');
        },
      },
    );
  };

  const handleDeleteData = ({ id }: deletDataProps) => {
    deleteComment(
      {
        commentId: id,
      },
      {
        onSuccess: () => {
          handleDelete();
          refetch();
        },
      },
    );
  };

  const handleReplyEdit = () => {
    setIsReplyEdit((prev) => !prev);
  };

  const handleEdit = () => {
    setIsEdit((prev) => !prev);
  };
  const handleDelete = () => {
    setIsDelete((prevData) => !prevData);
  };

  const handleSelectUserProfile = () => {
    setIsUserProfile((prev) => !prev);
  };

  const handleNavigate = () => {
    navigate(-1);
  };

  const handleUserProfileData = ({
    imgUrl,
    nickName,
    content,
  }: CommentUserModalProps) => {
    setUserProfileData({
      imgUrl,
      nickName,
      content,
    });
  };
  const handleCountPage = () => {
    setPages((prev) => prev + 1);
  };
  const handleCommentId = (id: number) => {
    setCommentId(id);
  };

  const handleNewComment = (content: string) => {
    setNewComment(content);
  };
  const constant = {
    title: '댓글',
    isRegister: false,
    commentCount: newCommentData && newCommentData.content.length,
    onClick: handleNavigate,
  };

  return (
    <>
      <CommentUserModal
        openModal={isUserProfile}
        onUserProfile={handleSelectUserProfile}
        {...userProfileData}
      />
      <NavBarNew {...constant} />
      {newCommentData && (
        <CommentList
          commentData={newCommentData}
          onUserProfile={handleSelectUserProfile}
          onUserProfileData={handleUserProfileData}
          handleDeleteClick={handleDeleteData}
          onCommentId={handleCommentId}
          onEdit={handleEdit}
          onReplyEdit={handleReplyEdit}
          onDelete={handleDelete}
          onCountPage={handleCountPage}
          isDelete={isDelete}
          isEdit={isEdit}
          isReplyEdit={isReplyEdit}
        />
      )}
      <Modal
        openModal={isDelete}
        body="한 번 삭제하면 되돌릴 수 없어요"
        title="댓글을 삭제할까요?"
        closeText="취소"
        confirmText="삭제"
        onClose={handleDelete}
        onConfirm={() => {
          handleDeleteData({ id: commentId });
        }}
      />
      {!isEdit && !isReplyEdit && (
        <TabBarNewComment
          newComment={newComment}
          onNewComment={handleNewComment}
          onPostNewComment={handlePostNewData}
        />
      )}
      {isEdit && !isReplyEdit && (
        <TabBarEditComment
          closeText="취소"
          confirmText="등록"
          newComment={newComment}
          onNewComment={handleNewComment}
          onClose={handleEdit}
          onConfirm={handlePutData}
          commentId={commentId}
        />
      )}
      {isReplyEdit && !isEdit && (
        <TabBarReplyComment
          closeText="취소"
          confirmText="등록"
          newComment={newComment}
          onNewComment={handleNewComment}
          onClose={handleReplyEdit}
          onConfirm={handlePostReplyData}
          commentId={commentId}
        />
      )}
    </>
  );
};
