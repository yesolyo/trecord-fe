import { NavBarNew } from '@components/common/NavBar/NavBarNew';
import { Fragment, ReactElement, useState } from 'react';
import { MypageCommentList } from '@components/MypageComment/MyPgaeCommentList';
import Modal from '@components/common/Modal';
import { useNavigate } from 'react-router-dom';
import { useMyCommentListInfiniteQuery } from '@/apis';
import useCommentListDeleteMutation from '@/apis/Comment/useCommentListDeleteMutation';
import Skeleton from '@components/common/skeleton';
import * as S from './style';
export const Fallback = (): ReactElement => {
  const contentList = Array.from({ length: 8 }, (_, i) => i + 1);
  return (
    <S.Layout>
      <NavBarNew title="댓글" isRegister={false} />
      <div className="content">
        {contentList.map((content, index) => (
          <Fragment key={content}>
            <Skeleton width="100%" height="85px" />
            {index !== contentList.length - 1 && <hr />}
          </Fragment>
        ))}
      </div>
    </S.Layout>
  );
};
export const MyPageComment = () => {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [commentId, setCommentId] = useState<number>(0);
  const { mutate } = useCommentListDeleteMutation();
  const {
    data: myCommentListData,
    hasNextPage,
    isLoading,
    fetchNextPage,
  } = useMyCommentListInfiniteQuery();
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
  return (
    <>
      <NavBarNew title="댓글" isRegister={false} onClick={() => navigate(-1)} />
      {myCommentListData && (
        <MypageCommentList
          myCommentListData={myCommentListData}
          hasNextPage={hasNextPage}
          isLoading={isLoading}
          fetchNextPage={fetchNextPage}
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
