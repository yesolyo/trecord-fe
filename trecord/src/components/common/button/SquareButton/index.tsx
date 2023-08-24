import * as S from './style';
interface squareButtonProps {
  title: string;
  width: string;
  height: string;
  disabled?: boolean;
  isDark: boolean;
  onClick?: () => void;
}
export const SquareButton = ({
  title,
  width,
  height,
  disabled,
  isDark,
  onClick,
}: squareButtonProps) => {
  return (
    <>
      <S.ButtonBox
        width={width}
        height={height}
        disabled={disabled}
        isDark={isDark}
        onClick={onClick}
      >
        {title}
      </S.ButtonBox>
    </>
  );
};
