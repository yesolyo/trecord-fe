import * as S from './style';

type ButtonTypes = 'submit' | 'button';
interface SquareBtnProps {
  title: string;
  type: ButtonTypes;
  disabled?: boolean;
  onClick?: (e: any) => void;
}
export const SquareBtn = ({
  title,
  type = 'button',
  onClick,
  disabled,
}: SquareBtnProps) => {
  return (
    <S.Layout type={type} onClick={onClick} disabled={disabled}>
      {title}
    </S.Layout>
  );
};
