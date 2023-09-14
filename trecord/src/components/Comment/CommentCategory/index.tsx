import { Icon } from '@components/common/Icon';
import { CommentModal, deletDataProps } from '../CommentModal';
import * as S from './style';
import { useEffect, useRef, useState } from 'react';
interface commentCateogoryProps {
  id: number;
  handleDeleteClick: ({}: deletDataProps) => void;
  onEdit: () => void;
  onCommentId: (id: number) => void;
  onDelete: () => void;
  isNewComment?: React.Dispatch<React.SetStateAction<boolean>>;
  onReplyEdit: () => void;
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

  const handleIsCategory = () => {
    setIsCategory((prev) => !prev);
  };

  return (
    <S.Layout ref={categoryRef}>
      <Icon
        iconType="more"
        width={16}
        onClick={() => {
          props.onCommentId(props.id);
          setIsCategory(!isCategory);
        }}
      />
      {isCategory && <CommentModal onCategory={handleIsCategory} {...props} />}
    </S.Layout>
  );
};
