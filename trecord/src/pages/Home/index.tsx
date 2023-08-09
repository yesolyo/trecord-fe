import { EmptyHome } from '@components/EmptyHome';
import { NavBar } from '@components/common/NavBar';
import { TabBar } from '@components/common/TabBar';

export const Home = () => {
  return (
    <>
      <NavBar totalPage={0} />
      <EmptyHome />
      <TabBar currentPage="home" />
    </>
  );
};
