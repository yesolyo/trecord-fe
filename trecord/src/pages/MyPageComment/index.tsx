import useGetMypageComment from '@/apis/Comment/getMypageComment';
import { NavBarNew } from '@components/common/NavBar/NavBarNew';
import { useState } from 'react';
import { MypageCommentList } from '@components/MypageComment/MypageCommentList';
import { deletDataProps } from '@components/Comment/CommentModal';
import Modal from '@components/common/Modal';
import { useNavigate } from 'react-router-dom';
import useDeleteNewComment from '@/apis/Comment/deleteNewComment';

export const MyPageComment = () => {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [commentId, setCommentId] = useState<number>(0);
  const [pageCount, setPageCount] = useState<number>(10);
  const { mutate } = useDeleteNewComment();
  const { data, refetch } = useGetMypageComment({ pageCount });
  const navigate = useNavigate();

  const handleDeleteData = ({ id }: deletDataProps) => {
    mutate(
      {
        commentId: id,
      },
      {
        onSuccess: () => {
          refetch();
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
      {data && (
        <MypageCommentList
          commentData={data}
          onPageCount={handlePageCount}
          onModalActive={handleModalActive}
        />
      )}
      <Modal
        openModal={isModalActive}
        body="댓글을 삭제 하시겠습니까?"
        closeText="취소"
        confirmText="삭제하기"
        onClose={() => setIsModalActive(false)}
        onConfirm={() => handleDeleteData({ id: commentId })}
      />
    </>
  );
};
