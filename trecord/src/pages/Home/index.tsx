import { EmptyHome } from '@components/EmptyHome';
import { FeedHome } from '@components/FeedHome';
import { NavBarHome } from '@components/common/NavBar/NavBarHome';
import { TabBar } from '@components/common/TabBar';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircularButton } from '@components/common/button/CircularButton';
import * as S from './style';
export const Home = () => {
  const [feedData, setFeedData] = useState([]);
  const navigate = useNavigate();
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
          if (data.code === 200 || data.code === 201) {
            setFeedData(data.data.feeds);
          }
        })
        .catch((err) => console.log(err));
    }
  }, []);

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
      {feedData.length > 0 ? <FeedHome pageData={feedData} /> : <EmptyHome />}
      <S.ButtonBox>
        <CircularButton iconType="edit" {...constant.circularBtn} />
      </S.ButtonBox>
      <TabBar currentPage="home" />
      <NavBarHome totalPage={feedData.length} />
    </>
  );
};
