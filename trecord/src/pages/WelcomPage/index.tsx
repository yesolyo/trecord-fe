import { Icon } from '@components/common/Icon';
import * as S from './style';
import { SquareBtn } from '@components/common/SquareBtn';
import { useNavigate } from 'react-router-dom';
import { SquareButton } from '@components/common/button/SquareButton';
export const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <S.Layout>
      <S.CharcterBox>
        <Icon iconType="welcomeCharacter" width={74} height={98} />
      </S.CharcterBox>
      <S.LogoBox>
        <Icon iconType="trecordLogo" width={142} height={22} />
      </S.LogoBox>
      <S.ExplainBox>
        <span>트레코드는 소중한 여행 기억을 더 오래</span>
        <span>간직할 수 있도록 도와줘요.</span>
        <span>함께 간 친구와도 여행을 공유해보세요!</span>
      </S.ExplainBox>
      <SquareBtn
        title="기록하기"
        width="212px"
        height="46px"
        onClick={() => navigate('/login')}
      />
    </S.Layout>
  );
};
