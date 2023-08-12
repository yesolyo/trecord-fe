import { NavBarBackBtn } from '@components/common/NavBar/NavBarBackBtn';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './style';
export const NewWriteRecord = () => {
  const [write, setWrite] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const { feedId, title, startDate, weather, place, feel, move, withPeople } =
    location.state;

  const postData = () => {
    const getToken = localStorage.getItem('acessToken');
    if (getToken) {
      fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/records`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: getToken,
        },
        body: JSON.stringify({
          feedId: feedId,
          title: title,
          date: `${startDate}T00:00`,
          place: place,
          feeling: feel,
          weather: weather,
          transportation: move,
          content: write,
          companion: withPeople,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          navigate(`/recordDetail/${data.data.recordId}`);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <S.Layout>
      <NavBarBackBtn
        title="기록 남기기"
        isDark={true}
        isRegister={true}
        disabled={write.length <= 0}
        registerClick={postData}
      />
      <textarea
        cols={40}
        rows={45}
        placeholder="당신만의 여행 기록을 남겨보세요!"
        value={write}
        onChange={(e) => {
          setWrite(e.target.value);
        }}
      />
    </S.Layout>
  );
};
