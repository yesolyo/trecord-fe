import { EmptyHome } from '@components/EmptyHome';
import { FeedHome } from '@components/FeedHome';
import { NavBarHome } from '@components/common/NavBar/NavBarHome';
import { TabBar } from '@components/common/TabBar';
import { useNavigate } from 'react-router-dom';
import { CircularButton } from '@components/common/button/CircularButton';
import * as S from './style';
import { useGetFeeds } from '@/apis';

export const Home = () => {
  const navigate = useNavigate();

  const { data } = useGetFeeds();

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
      {data?.length ?? 0 > 0 ? (
        <FeedHome pageData={data ?? []} />
      ) : (
        <EmptyHome />
      )}
      <S.ButtonBox>
        <CircularButton iconType="edit" {...constant.circularBtn} />
      </S.ButtonBox>
      <TabBar currentPage="home" />
      <NavBarHome totalPage={data?.length ?? 0} />
    </>
  );
};
