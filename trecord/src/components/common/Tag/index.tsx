import * as S from './style';
interface TagProps {
  title: string | undefined;
}
export const Tag = ({ title }: TagProps) => {
  return <S.Layout>{title}</S.Layout>;
};
