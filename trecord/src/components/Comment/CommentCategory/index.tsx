import { Icon } from '@components/common/Icon';
import { CommentModal, deletDataProps } from '../CommentModal';
import * as S from './style';
import { useEffect, useRef, useState } from 'react';
interface commentCateogoryProps {
  id: number;
  handleDeleteClick: ({}: deletDataProps) => void;
  isEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CommentCateogory = ({ ...props }: commentCateogoryProps) => {
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
      {isCategory && <CommentModal {...props} />}
    </S.Layout>
  );
};
