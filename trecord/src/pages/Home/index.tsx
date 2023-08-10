import { FeedHome } from '@components/FeedHome';
import { NavBar } from '@components/common/NavBar';
import { NewBtn } from '@components/common/NewBtn';
import { TabBar } from '@components/common/TabBar';
import { useEffect } from 'react';

export const Home = () => {
  const getToken = localStorage.getItem('acessToken');
  useEffect(() => {
    if (getToken) {
      fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/feeds`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: getToken,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => console.log(err));
    }
  });
  return (
    <>
      <FeedHome />
      <NavBar totalPage={0} />
      <NewBtn type="edit" iconWidth={24} onClick={() => {}} />
      <TabBar currentPage="home" />
    </>
  );
};
