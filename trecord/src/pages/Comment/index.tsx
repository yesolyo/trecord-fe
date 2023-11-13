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
import useGetNewComment from '@/apis/Comment/getNewComment';
import usePostReplyComment, {
  postReplyCommentProps,
} from '@/apis/Comment/postReplyComment';
import { TabBarNewComment } from '@components/common/TabBar/TabBarComment/TabBarNewComment';
import { TabBarEditComment } from '@components/common/TabBar/TabBarComment/TabBarEditComment';
import { TabBarReplyComment } from '@components/common/TabBar/TabBarComment/TabBarReplyComment';
import useDeleteNewComment from '@/apis/Comment/deleteNewComment';
import usePostNewComment from '@/apis/Comment/postNewComment';
import useModifyNewComment from '@/apis/Comment/modifyNewComment';
import { Portal } from '@components/common/Portal';
import { TabBarComment } from '@components/common/TabBar/TabBarComment';

export const Comment = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { mutate: deleteComment } = useDeleteNewComment();
  const { mutate: postComment } = usePostNewComment();
  const { mutate: putComment } = useModifyNewComment();
  const { mutate: postReplyComment } = usePostReplyComment();
  const [commentType, setCommentType] = useState('NEW');
  const [comment, setComment] = useState<string>('');
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [commentId, setCommentId] = useState<number>(0);
  const [isUserProfile, setIsUserProfile] = useState<boolean>(false);
  const [userProfileData, setUserProfileData] = useState<CommentUserModalProps>(
    { imgUrl: '', nickName: '', content: '' },
  );
  const [pages, setPages] = useState<number>(5);
  const { data: newCommentData, refetch } = useGetNewComment({
    recordId: Number(id),
    page: pages,
  });

  const handleSaveNewComment = ({ id, content }: postNewCommentProps) => {
    postComment(
      {
        recordId: Number(id),
        content,
      },
      {
        onSuccess: () => {
          refetch();
          setComment('');
        },
      },
    );
  };

  const handleSaveReplyComment = ({
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
          setComment('');
        },
      },
    );
  };

  const handleModifyComment = ({ id, content }: putDataProps) => {
    putComment(
      {
        commentId: id,
        content: content,
      },
      {
        onSuccess: () => {
          refetch();
          setComment('');
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

  const handleChangeSelect = (v: string) => {
    if (id) {
      switch (v) {
        case 'NEW':
          handleSaveNewComment({ id: Number(id), content: comment });
          return;
        case 'MODIFY':
          handleModifyComment({ id: commentId, content: comment });
          return;
        case 'REPLY':
          handleSaveReplyComment({
            recordId: Number(id),
            parentId: commentId,
            content: comment,
          });
          return;
        default:
          handleSaveCommentType('NEW');
      }
    }
  };

  const handleDelete = () => {
    setIsDelete((prevData) => !prevData);
  };
  const handleSaveComment = (v: string) => {
    setComment(v);
  };

  const handleSaveCommentType = (v: string) => {
    setCommentType(v);
  };

  const handleSaveCommentId = (id: number) => {
    setCommentId(id);
  };

  const handleSelectUserProfile = () => {
    setIsUserProfile((prev) => !prev);
  };

  return (
    <>
      <NavBarNew
        title="댓글"
        isRegister={false}
        commentCount={newCommentData && newCommentData.content.length}
        onClick={() => navigate(`/recordDetail/${id}`)}
      />
      {newCommentData && (
        <CommentList
          commentData={newCommentData}
          onSaveCommentId={handleSaveCommentId}
          onSaveCommentType={handleSaveCommentType}
          onSaveComment={handleSaveComment}
        />
      )}
      <TabBarComment
        commentType={commentType}
        confirmText="등록"
        closeText="취소"
        comment={comment}
        onClose={() => handleSaveCommentType('NEW')}
        onConfirm={handleChangeSelect}
        onSaveComment={handleSaveComment}
      />
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
      <CommentUserModal
        openModal={isUserProfile}
        onUserProfile={handleSelectUserProfile}
        {...userProfileData}
      />
    </>
  );
};
