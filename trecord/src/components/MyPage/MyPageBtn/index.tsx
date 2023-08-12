import { useNavigate } from 'react-router-dom';
import * as S from './style';

export const MyPageBtn = () => {
  const navigate = useNavigate();
  return (
    <S.Layout>
      <S.BtnBox onClick={() => navigate('/login')}>회원탈퇴</S.BtnBox>
      <S.BtnBox onClick={() => navigate('/login')}>로그아웃</S.BtnBox>
    </S.Layout>
  );
};
