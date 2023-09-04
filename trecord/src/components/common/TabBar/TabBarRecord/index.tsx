import { Icon } from '@components/common/Icon';
import * as S from './style';
interface TabBarRecordProps {
  isRegister: boolean;
  onPrevClick?: () => void;
  onNextClick?: () => void;
}
export const TabBarRecord = ({
  isRegister,
  onPrevClick,
  onNextClick,
}: TabBarRecordProps) => {
  return (
    <S.Layout>
      {isRegister ? (
        <>
          <Icon iconType="camera" width={24} onClick={onPrevClick} />
          <Icon iconType="gallery" width={24} onClick={onNextClick} />
        </>
      ) : (
        <>
          <Icon iconType="heart" width={24} onClick={onPrevClick} />
          <Icon iconType="message" width={24} onClick={onNextClick} />
        </>
      )}
    </S.Layout>
  );
};
