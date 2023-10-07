import { Icon } from '@components/common/Icon';
import * as S from './style';
import { useState } from 'react';
import usePostLike from '@/apis/Like/postLike';
interface TabBarRecordProps {
  isRegister: boolean;
  isActiveLike?: boolean;
  recordId?: number;
  onPrevClick?: () => void;
  onNextClick?: () => void;
}
export const TabBarRecord = ({
  isRegister,
  isActiveLike,
  recordId,
  onPrevClick,
  onNextClick,
}: TabBarRecordProps) => {
  const { mutate: postLike } = usePostLike();
  const [isLike, setIsLike] = useState(isActiveLike);

  const handlePostLike = () => {
    recordId &&
      postLike(
        { recordId },
        {
          onSuccess: (data) => {
            setIsLike(data.liked);
          },
        },
      );
  };

  return (
    <S.Layout>
      {isRegister ? (
        <>
          <Icon iconType="camera" width={24} onClick={onPrevClick} />
          <Icon iconType="gallery" width={24} onClick={onNextClick} />
        </>
      ) : (
        <>
          <Icon
            iconType={isLike ? 'activeHeart' : 'heart'}
            width={24}
            onClick={handlePostLike}
          />
          <Icon iconType="message" width={24} onClick={onNextClick} />
        </>
      )}
    </S.Layout>
  );
};
