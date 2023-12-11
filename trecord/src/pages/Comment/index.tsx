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
import usePostReplyComment, {
  postReplyCommentProps,
} from '@/apis/Comment/useReplyCommentMutation';
import { TabBarComment } from '@components/common/TabBar/TabBarComment';
import { getTotalItem } from '@/utils/getTotalItem';
import {
  useModifyNewCommentMutation,
  useNewCommentDeleteMutation,
  useNewCommentInfiniteQuery,
  useNewCommentMutation,
} from '@/apis';

export const Comment = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectCommentId, setSelectCommentId] = useState<number>(0);
  const { mutate: deleteNewComment } = useNewCommentDeleteMutation({
    recordId: id,
    commentId: selectCommentId,
  });
  const { mutate: postComment } = useNewCommentMutation();
  const { mutate: putComment } = useModifyNewCommentMutation();
  const { mutate: postReplyComment } = usePostReplyComment();
  const [commentType, setCommentType] = useState('NEW');
  const [comment, setComment] = useState<string>('');
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [isUserProfile, setIsUserProfile] = useState<boolean>(false);
  const [userProfile, setUserProfile] = useState<CommentUserModalProps>({
    imgUrl: '',
    nickName: '',
    content: '',
  });

  const {
    data: commentData,
    fetchNextPage,
    hasNextPage,
    isLoading,
  } = useNewCommentInfiniteQuery({
    recordId: Number(id),
  });

  const handleSaveNewComment = ({ id, content }: postNewCommentProps) => {
    postComment(
      {
        recordId: Number(id),
        content,
      },
      {
        onSuccess: () => {
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
          setComment('');
          setSelectCommentId(0);
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
          setComment('');
          setSelectCommentId(0);
        },
      },
    );
  };

  const handleDeleteNewComment = ({ id }: deletDataProps) => {
    deleteNewComment(
      {
        commentId: id,
      },
      {
        onSuccess: () => {
          handleIsDeleteModalActive();
          setCommentType('NEW');
          setSelectCommentId(0);
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
          handleModifyComment({ id: selectCommentId, content: comment });
          handleSaveCommentType('NEW');
          return;
        case 'REPLY':
          handleSaveReplyComment({
            recordId: Number(id),
            parentId: selectCommentId,
            content: comment,
          });
          handleSaveCommentType('NEW');
          return;
        default:
      }
    }
  };

  const handleIsDeleteModalActive = () => {
    setIsDelete((prevData) => !prevData);
  };
  const handleSaveComment = (v: string) => {
    setComment(v);
  };

  const handleSaveCommentType = (v: string) => {
    setCommentType(v);
  };

  const handleSaveCommentId = (id: number) => {
    setSelectCommentId(id);
  };

  const handleSelectUserProfile = () => {
    setIsUserProfile((prev) => !prev);
  };

  const handleClickUserProfile = ({
    imgUrl,
    nickName,
    content,
  }: CommentUserModalProps) => {
    setUserProfile({
      imgUrl,
      nickName,
      content,
    });
    handleSelectUserProfile();
  };

  const handleClickTabBarClose = () => {
    handleSaveCommentType('NEW');
    setComment('');
    setSelectCommentId(0);
  };

  return (
    <>
      <NavBarNew
        title="댓글"
        isRegister={false}
        commentCount={commentData && getTotalItem({ data: commentData })}
        onClick={() => navigate(`/recordDetail/${id}`)}
      />
      {commentData && (
        <CommentList
          commentData={commentData}
          paginationLoading={isLoading}
          paginationHasNextPage={hasNextPage}
          onClickPagination={fetchNextPage}
          onSaveCommentId={handleSaveCommentId}
          onSaveCommentType={handleSaveCommentType}
          onSaveComment={handleSaveComment}
          onIsDeleteModalActive={handleIsDeleteModalActive}
          onClickUserProfile={handleClickUserProfile}
          selectCommentId={selectCommentId}
        />
      )}
      <TabBarComment
        commentType={commentType}
        confirmText="등록"
        closeText="취소"
        comment={comment}
        onClose={handleClickTabBarClose}
        onConfirm={handleChangeSelect}
        onSaveComment={handleSaveComment}
      />
      <Modal
        openModal={isDelete}
        body="한 번 삭제하면 되돌릴 수 없어요"
        title="댓글을 삭제할까요?"
        closeText="취소"
        confirmText="삭제"
        onClose={handleIsDeleteModalActive}
        onConfirm={() => {
          handleDeleteNewComment({ id: selectCommentId });
        }}
      />
      <CommentUserModal
        openModal={isUserProfile}
        onUserProfile={handleSelectUserProfile}
        {...userProfile}
      />
    </>
  );
};
