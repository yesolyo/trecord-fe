import { Icon } from '@components/common/Icon';
import * as S from './style';
export const WelcomePage = () => {
  return (
    <S.Layout>
      <Icon iconType="welcomeCharacter" width={74} height={98} />
      <Icon iconType="trecordLogo" width={142} height={22} />
      <S.ExplainBox>
        <span>트레코드는 소중한 여행 기억을 더 오래</span>
        <span>간직할 수 있도록 도와줘요.</span>
        <span>함께 간 친구와도 여행을 공유해보세요!</span>
      </S.ExplainBox>
    </S.Layout>
  );
};
