import { TabBar } from '@components/common/TabBar';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>홈입니다</div>
      <TabBar currentPage="home" />
    </>
  );
};
