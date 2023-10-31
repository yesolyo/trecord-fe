import * as S from './style';

type ButtonTypes = 'submit' | 'button';
export type Size = 's' | 'm' | 'l';
interface SquareBtnProps {
  title: string;
  type?: ButtonTypes;
  disabled?: boolean;
  isDark?: boolean;
  size?: Size;
  onClick?: (e: any) => void;
}
export const SquareBtn = ({
  title,
  type = 'button',
  isDark = true,
  onClick,
  size = 'm',
  disabled,
}: SquareBtnProps) => {
  return (
    <S.Layout
      type={type}
      size={size}
      onClick={onClick}
      isDark={isDark}
      disabled={disabled}
    >
      {title}
    </S.Layout>
  );
};
