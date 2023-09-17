import { CommentList } from '@components/Comment/CommentList';
import { NavBarNew } from '@components/common/NavBar/NavBarNew';
import { TabBarComment } from '@components/common/TabBar/TabBarComment';
import { CommentUserModal } from '@components/Comment/CommentUserModal';
import Modal from '@components/common/Modal';
import { commentProps } from './type';

export const CommentView = ({
  comment,
  newComment,
  isEdit,
  isReplyEdit,
  isDelete,
  commentId,
  isUserProfile,
  userProfileData,
  onDeleteData,
  onPostNewData,
  onPostReplyData,
  onPutData,
  // onCloseEidt,
  onReplyEdit,
  onEdit,
  onDelete,
  onNavigate,
  onSelectUserProfile,
  onUserProfileData,
  onCommentId,
  onNewComment,
}: commentProps) => {
  const constant = {
    title: '댓글',
    isRegister: false,
    commentCount: comment.length,
    onClick: onNavigate,
  };

  return (
    <>
      <CommentUserModal
        openModal={isUserProfile}
        onUserProfile={onSelectUserProfile}
        {...userProfileData}
      />
      <NavBarNew {...constant} />
      <CommentList
        commentData={comment}
        onUserProfile={onSelectUserProfile}
        onUserProfileData={onUserProfileData}
        handleDeleteClick={onDeleteData}
        onCommentId={onCommentId}
        onEdit={onEdit}
        onReplyEdit={onReplyEdit}
        onDelete={onDelete}
      />
      <Modal
        openModal={isDelete}
        body="한 번 삭제하면 되돌릴 수 없어요"
        title="댓글을 삭제할까요?"
        closeText="취소"
        confirmText="삭제"
        onClose={onDelete}
        onConfirm={() => {
          onDeleteData({ id: commentId });
        }}
      />
      <TabBarComment
        newComment={newComment}
        onNewComment={onNewComment}
        onPostNewComment={onPostNewData}
        onPostReplyComment={onPostReplyData}
        onPutNewComment={onPutData}
        onCloseEdit={onEdit}
        onCloseReplyEdit={onReplyEdit}
        isEdit={isEdit}
        isReply={isReplyEdit}
        commentId={commentId}
      />
    </>
  );
};
