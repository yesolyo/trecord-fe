import { useNavigate } from 'react-router-dom';
import * as S from './style';
interface MypageLogoutModalProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}
export const MypageLogoutModal = ({ setIsActive }: MypageLogoutModalProps) => {
  const navigate = useNavigate();
  return (
    <S.Layout>
      <span>로그아웃 하시겠습니까?</span>
      <S.BtnBox>
        <S.CancelBtnBox onClick={() => setIsActive(false)}>취소</S.CancelBtnBox>
        <S.LogoutBtnBox onClick={() => navigate('/login')}>
          로그아웃
        </S.LogoutBtnBox>
      </S.BtnBox>
    </S.Layout>
  );
};
