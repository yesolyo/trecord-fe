import { Icon } from '@components/common/Icon';
import { CommentModal } from '../CommentModal';
import * as S from './style';
import { useEffect, useRef, useState } from 'react';
export const CommentCateogory = () => {
  const [isCategory, setIsCategory] = useState(false);
  const categoryRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutSide);
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide);
    };
  });

  const handleClickOutSide = (e: any) => {
    if (
      isCategory &&
      categoryRef.current !== null &&
      !categoryRef.current.contains(e.target)
    ) {
      setIsCategory(false);
    }
  };

  return (
    <S.Layout ref={categoryRef}>
      <Icon
        iconType="more"
        width={16}
        onClick={() => setIsCategory(!isCategory)}
      />
      {isCategory && <CommentModal />}
    </S.Layout>
  );
};
