import * as S from './style';
interface RecordListBtnProps {
  title: string;
  isActive: string;
  onClick: () => void;
}
export const RecordListBtn = ({
  title,
  isActive,
  onClick,
}: RecordListBtnProps) => {
  return (
    <S.Layout onClick={onClick} isActive={isActive === title}>
      {title}
    </S.Layout>
  );
};
