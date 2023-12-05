import { NavBarNew } from '@components/common/NavBar/NavBarNew';
import { useNavigate } from 'react-router-dom';
import useInviteMyPageQuery from '@/apis/MyPage/useInviteMyPageQuery';
import { MyPageInviteList } from '@components/MyPageInvite/MyPageInviteList';
import useInviteMyPageDeleteMutation from '@/apis/MyPage/useInviteMyPageDeleteMutation';
import { useState } from 'react';
export const MyPageInvite = () => {
  const navigate = useNavigate();
  const [pageCount, setPageCount] = useState<number>(10);
  const { data, refetch } = useInviteMyPageQuery({ pageCount });
  const { mutate } = useInviteMyPageDeleteMutation();

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
