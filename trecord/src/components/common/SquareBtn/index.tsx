import * as S from './style';

interface SquareBtnProps {
  title: string;
  width: string;
  height: string;
  disabled?: boolean;
  onClick: () => void;
}
export const SquareBtn = ({
  title,
  width,
  height,
  onClick,
  disabled,
}: SquareBtnProps) => {
  return (
    <S.BtnBox
      boxWidth={width}
      boxHeight={height}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </S.BtnBox>
  );
};
