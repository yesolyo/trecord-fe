import { FeedHome, Fallback as FeedHomeFallback } from '@components/FeedHome';
import { NavBarHome } from '@components/common/NavBar/NavBarHome';
import { MainTabBar } from '@components/common/TabBar/MainTabBar';
import { useNavigate } from 'react-router-dom';
import { CircularButton } from '@components/common/button/CircularButton';
import * as S from './style';
import { Suspense } from 'react';
import useFeedInfiniteQuery from '@/apis/Feed/useFeedInfiniteQuery';
import { getTotalItem } from '@/utils/getTotalItem';

export const Home = () => {
  const navigate = useNavigate();
  const {
    data: feedData,
    fetchNextPage,
    isFetching,
    hasNextPage,
  } = useFeedInfiniteQuery();

  const constant = {
    circularBtn: {
      width: 24,
      onClick: () => {
        navigate('/newfeed', { replace: true });
      },
    },
  };

  return (
    <>
      <Suspense fallback={<FeedHomeFallback />}>
        <FeedHome
          feedData={feedData}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetching={isFetching}
        />
      </Suspense>
      <S.ButtonBox>
        <CircularButton iconType="edit" {...constant.circularBtn} />
      </S.ButtonBox>
      <MainTabBar currentPage="home" />
      <NavBarHome
        totalPage={feedData?.pages && getTotalItem({ data: feedData })}
      />
    </>
  );
};
