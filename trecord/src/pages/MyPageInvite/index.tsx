import { NavBarNew } from '@components/common/NavBar/NavBarNew';
import { useNavigate } from 'react-router-dom';
import { MyPageInviteList } from '@components/MyPageInvite/MyPageInviteList';
import useInviteMyPageDeleteMutation from '@/apis/MyPage/useInviteMyPageDeleteMutation';
import { useInviteFeedListInfiniteQuery } from '@/apis/MyPage/useInviteFeedListInfiniteQuery';
export const MyPageInvite = () => {
  const navigate = useNavigate();
  const { mutate } = useInviteMyPageDeleteMutation();
  const {
    data: inviteFeedListData,
    isLoading: isDataFetching,
    hasNextPage,
    fetchNextPage,
  } = useInviteFeedListInfiniteQuery();

  const handleDeleteInvite = (id: number) => {
    mutate(
      {
        id,
      },
      {
        onSuccess: () => {},
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
      {inviteFeedListData && (
        <MyPageInviteList
          onDelete={handleDeleteInvite}
          inviteFeedListData={inviteFeedListData}
          isDataFetching={isDataFetching}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
        />
      )}
    </>
  );
};
