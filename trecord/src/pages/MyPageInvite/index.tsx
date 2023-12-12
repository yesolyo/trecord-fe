import { NavBarNew } from '@components/common/NavBar/NavBarNew';
import { useNavigate } from 'react-router-dom';
import { MyPageInviteList } from '@components/MyPageInvite/MyPageInviteList';
import useInviteMyPageDeleteMutation from '@/apis/MyPage/useInviteMyPageDeleteMutation';
import { useInviteFeedListInfiniteQuery } from '@/apis/MyPage/useInviteFeedListInfiniteQuery';
import { Fragment, ReactElement } from 'react';
import * as S from './style';
import Skeleton from '@components/common/skeleton';
export const Fallback = (): ReactElement => {
  const contentList = Array.from({ length: 8 }, (_, i) => i + 1);
  return (
    <S.Layout>
      <NavBarNew title="좋아요" isRegister={false} />
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
