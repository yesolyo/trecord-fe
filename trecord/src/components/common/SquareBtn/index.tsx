import * as S from './style';

interface SquareBtnProps {
  title: string;
  width: string;
  height: string;
  disabled?: boolean;
  onClick: (e: any) => void;
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
      type="button"
      boxWidth={width}
      boxHeight={height}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </S.BtnBox>
  );
};
