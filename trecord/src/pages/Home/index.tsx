import { FeedHome, Fallback as FeedHomeFallback } from '@components/FeedHome';
import { NavBarHome } from '@components/common/NavBar/NavBarHome';
import { MainTabBar } from '@components/common/TabBar/MainTabBar';
import { useNavigate } from 'react-router-dom';
import { CircularButton } from '@components/common/button/CircularButton';
import * as S from './style';
import { Suspense, useState } from 'react';

export const Home = () => {
  const navigate = useNavigate();

  const [totalFeeds, setTotalFeeds] = useState(0);

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
        <FeedHome totalFeedsSetter={setTotalFeeds} />
      </Suspense>
      <S.ButtonBox>
        <CircularButton iconType="edit" {...constant.circularBtn} />
      </S.ButtonBox>
      <MainTabBar currentPage="home" />
      <NavBarHome totalPage={totalFeeds} />
    </>
  );
};
