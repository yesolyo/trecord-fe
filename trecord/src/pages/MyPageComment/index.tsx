import useMypageCommentQuery from '@/apis/Comment/useMypageCommentQuery';
import { NavBarNew } from '@components/common/NavBar/NavBarNew';
import { useState } from 'react';
import { MypageCommentList } from '@components/MypageComment/MypageCommentList';
import Modal from '@components/common/Modal';
import { useNavigate } from 'react-router-dom';
import useNewCommentDeleteMutation from '@/apis/Comment/useNewCommentDeleteMutation';

export const MyPageComment = () => {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [commentId, setCommentId] = useState<number>(0);
  const [pageCount, setPageCount] = useState<number>(10);
  const { mutate } = useNewCommentDeleteMutation();
  const { data: commentData } = useMypageCommentQuery({ page: pageCount });
  const navigate = useNavigate();

  const handleDeleteData = (id: number) => {
    mutate(
      {
        commentId: id,
      },
      {
        onSuccess: () => {
          setIsModalActive(false);
        },
      },
    );
  };

  const handleModalActive = (id: number) => {
    setCommentId(id);
    setIsModalActive(true);
  };
  const handlePageCount = () => {
    setPageCount((prev) => prev + 10);
  };
  return (
    <>
      <NavBarNew title="댓글" isRegister={false} onClick={() => navigate(-1)} />
      {commentData && (
        <MypageCommentList
          commentData={commentData}
          onPageCount={handlePageCount}
          onModalActive={handleModalActive}
        />
      )}
      <Modal
        openModal={isModalActive}
        title="댓글을 삭제 하시겠습니까?"
        closeText="취소"
        confirmText="삭제하기"
        onClose={() => setIsModalActive(false)}
        onConfirm={() => handleDeleteData(commentId)}
      />
    </>
  );
};
