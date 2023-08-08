import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>홈입니다</div>
      <button onClick={() => navigate('/newTrip')}>등록하기 버튼</button>
      <button onClick={() => navigate('/mypage')}>마이페이지 버튼</button>
    </>
  );
};
