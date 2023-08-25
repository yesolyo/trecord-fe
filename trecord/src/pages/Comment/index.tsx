import { CommentList } from '@components/Comment/CommentList';
import { NavBarNew } from '@components/common/NavBar/NavBarNew';
import { TabBarComment } from '@components/common/TabBar/TabBarComment';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './style';

export const Comment = () => {
  const navigate = useNavigate();

  const constant = {
    title: '댓글',
    isRegister: false,
    commentCount: 5,
    onClick: () => navigate(-1),
  };

  return (
    <S.Layout>
      <NavBarNew {...constant} />
      <CommentList />
      <TabBarComment />
    </S.Layout>
  );
};
