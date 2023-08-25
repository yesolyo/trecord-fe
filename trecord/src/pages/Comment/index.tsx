import { NavBarNew } from '@components/common/NavBar/NavBarNew';
import { TabBarComment } from '@components/common/TabBar/TabBarComment';
import { useNavigate } from 'react-router-dom';

export const Comment = () => {
  const navigate = useNavigate();

  const constant = {
    title: '댓글',
    isRegister: false,
    commentCount: 5,
    onClick: () => navigate(-1),
  };
  return (
    <>
      <NavBarNew {...constant} />
      <TabBarComment />
    </>
  );
};
