import { Icon } from '../Icon';
import { Spinner } from '../Spinner';
import * as S from './style';
export const SpinnerFallback = () => {
  return (
    <S.Layout>
      <Icon iconType="noneCharacter" width={111.37} height={73} />
      <span className="text">로딩중...</span>
      <Spinner />
    </S.Layout>
  );
};
