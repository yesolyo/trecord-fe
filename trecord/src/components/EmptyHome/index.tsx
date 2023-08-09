import { Icon } from '@components/common/Icon';
import * as S from './style';
export const EmptyHome = () => {
  return (
    <S.Layout>
      <Icon iconType="noneCharacter" width={111.37} height={73} />
      <S.TextBox>앗!</S.TextBox>
      <S.ExplainBox>
        <span>아직 생성된 페이지가 없어요.</span>
        <span>소중한 여행 추억을 기록해보세요.</span>
      </S.ExplainBox>
    </S.Layout>
  );
};
