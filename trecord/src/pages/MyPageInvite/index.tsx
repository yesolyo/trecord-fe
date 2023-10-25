import { NavBarNew } from '@components/common/navBar/NavBarNew';
import { useNavigate } from 'react-router-dom';
import useGetMyPageInvite from '@/apis/MyPage/getMyPageInvite';
import { MyPageInviteList } from '@components/MyPageInvite/MyPageInviteList';
import useDeleteMyPageInvite from '@/apis/MyPage/deleteMyPageInvite';
import { useState } from 'react';
export const MyPageInvite = () => {
  const navigate = useNavigate();
  const [pageCount, setPageCount] = useState<number>(10);
  const { data, refetch } = useGetMyPageInvite({ pageCount });
  const { mutate } = useDeleteMyPageInvite();

  const handlePageCount = () => {
    setPageCount((prev) => prev + 10);
  };

  const handleDeleteInvite = (id: number) => {
    mutate(
      {
        id,
      },
      {
        onSuccess: () => {
          refetch();
        },
      },
    );
  };
  return (
    <>
      <NavBarNew
        title="초대된 피드"
        isRegister={false}
        onClick={() => navigate(-1)}
      />
      {data && (
        <MyPageInviteList
          onDelete={handleDeleteInvite}
          inviteData={data}
          onPageCount={handlePageCount}
        />
      )}
    </>
  );
};
