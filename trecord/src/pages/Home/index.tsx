import { EmptyHome } from '@components/EmptyHome';
import { NavBar } from '@components/common/NavBar';
import { NewBtn } from '@components/common/NewBtn';
import { TabBar } from '@components/common/TabBar';

export const Home = () => {
  return (
    <>
      <NavBar totalPage={0} />
      <EmptyHome />
      <NewBtn />
      <TabBar currentPage="home" />
    </>
  );
};
