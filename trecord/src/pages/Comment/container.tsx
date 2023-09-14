import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  CommentUserModalProps,
  GetCommentProps,
  deletDataProps,
  postNewCommentProps,
  putDataProps,
} from '@/types/comment';
import {
  useDeleteNewComment,
  usePostNewComment,
  usePutNewComment,
} from '@/apis/Comment/postNewComment';
import { getNewComment } from '@/apis/Comment/getNewComment';
import usePostReplyComment, {
  postReplyCommentProps,
} from '@/apis/Comment/postReplyComment';
import { CommentView } from './view';

export const CommentContainer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { mutate: deleteComment } = useDeleteNewComment();
  const { mutate: postComment } = usePostNewComment();
  const { mutate: putComment } = usePutNewComment();
  const { mutate: postReplyComment } = usePostReplyComment();
  const [comment, setComment] = useState<GetCommentProps[]>([]);
  const [newComment, setNewComment] = useState<string>('');
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isReplyEdit, setIsReplyEdit] = useState<boolean>(false);
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [commentId, setCommentId] = useState<number>(0);
  const [isUserProfile, setIsUserProfile] = useState<boolean>(false);
  const [userProfileData, setUserProfileData] = useState<CommentUserModalProps>(
    { imgUrl: '', nickName: '', content: '' },
  );
  const handleGetData = () => {
    getNewComment({ recordId: Number(id) }).then((data) => {
      setComment(data.comments);
    });
  };

  const handleDeleteData = ({ id }: deletDataProps) => {
    deleteComment(
      {
        commentId: id,
      },
      {
        onSuccess: () => {
          handleGetData();
        },
      },
    );
    handleDelete();
  };

  const handlePostNewData = ({ id, content }: postNewCommentProps) => {
    postComment(
      {
        recordId: Number(id),
        content,
      },
      {
        onSuccess: () => {
          handleGetData();
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
          handleGetData();
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
          handleGetData();
          setNewComment('');
        },
      },
    );
    setIsEdit(false);
  };

  const handleCloseEdit = () => {
    setIsEdit(false);
    setIsReplyEdit(false);
  };

  const handleReplyEdit = () => {
    setIsReplyEdit(true);
  };

  const handleEdit = () => {
    setIsEdit((prev) => !prev);
  };
  const handleDelete = () => {
    setIsDelete((prevData) => !prevData);
  };

  const handleNavigate = () => {
    navigate(-1);
  };

  const handleSelectUserProfile = () => {
    setIsUserProfile(false);
  };

  const handelUserProfileData = ({
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
  const handleCommentId = (id: number) => {
    setCommentId(id);
  };

  const handleNewComment = (content: string) => {
    setNewComment(content);
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <CommentView
      comment={comment}
      newComment={newComment}
      isEdit={isEdit}
      isReplyEdit={isReplyEdit}
      isDelete={isDelete}
      commentId={commentId}
      isUserProfile={isUserProfile}
      userProfileData={userProfileData}
      onDeleteData={handleDeleteData}
      onPostNewData={handlePostNewData}
      onPostReplyData={handlePostReplyData}
      onPutData={handlePutData}
      onCloseEidt={handleCloseEdit}
      onReplyEdit={handleReplyEdit}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onNavigate={handleNavigate}
      onSelectUserProfile={handleSelectUserProfile}
      onUserProfileData={handelUserProfileData}
      onCommentId={handleCommentId}
      onNewComment={handleNewComment}
    />
  );
};
