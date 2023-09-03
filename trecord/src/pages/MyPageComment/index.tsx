import { getMypageComment } from '@/apis/Comment/getMypageComment';
import { GetMypageCommentResponse } from '@/types/comment';
import { NavBarBackBtn } from '@components/common/NavBar/NavBarBackBtn';
import { NavBarNew } from '@components/common/NavBar/NavBarNew';
import { useEffect, useState } from 'react';
import * as S from './style';
import { MypageCommentList } from '@components/MypageComment/MypageCommentList';
import { useDeleteNewComment } from '@/apis/Comment/postNewComment';
import { CommentModal, deletDataProps } from '@components/Comment/CommentModal';
import { CommentUserModal } from '@components/Comment/CommentUserModal';
import Modal from '@components/common/Modal';
export const MyPageComment = () => {
  const [comment, setComment] = useState<GetMypageCommentResponse>();
  const [isActiveModal, setIsActiveModal] = useState<boolean>(false);
  const [commentId, setCommentId] = useState<number>(0);
  const { mutate } = useDeleteNewComment();
  useEffect(() => {
    HandleGetData();
  }, []);

  const HandleGetData = () => {
    getMypageComment().then((data) => {
      setComment(data);
    });
  };

  const HandleDeleteData = ({ id }: deletDataProps) => {
    mutate(
      {
        commentId: id,
      },
      {
        onSuccess: () => {
          HandleGetData();
          setIsActiveModal(false);
        },
      },
    );
  };

  return (
    <S.Layout>
      <NavBarNew title="댓글" isRegister={false} />
      {comment && (
        <MypageCommentList
          {...comment}
          commentData={setCommentId}
          onClickModal={setIsActiveModal}
        />
      )}
      <Modal
        openModal={isActiveModal}
        body="댓글을 삭제 하시겠습니까?"
        closeText="취소"
        confirmText="삭제하기"
        onClose={() => setIsActiveModal(false)}
        onConfirm={() => HandleDeleteData({ id: commentId })}
      />
    </S.Layout>
  );
};
