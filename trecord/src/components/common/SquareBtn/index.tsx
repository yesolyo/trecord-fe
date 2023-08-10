import * as S from './style';

interface SquareBtnProps {
  title: string;
  width: string;
  height: string;
  onClick: () => void;
}
export const SquareBtn = ({
  title,
  width,
  height,
  onClick,
}: SquareBtnProps) => {
  return (
    <S.BtnBox boxWidth={width} boxHeight={height} onClick={onClick}>
      {title}
    </S.BtnBox>
  );
};
