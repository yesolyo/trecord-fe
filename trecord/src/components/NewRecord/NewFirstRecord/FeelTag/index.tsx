import * as S from './style';

interface FeelTagProps {
  feelName: string;
  textTitle?: string;
  activeBtn: string;
  width: string;
  height: string;
  activeSetBtn: React.Dispatch<React.SetStateAction<string>>;
}
export const FeelTag = ({
  feelName,
  textTitle,
  activeBtn,
  activeSetBtn,
  width,
  height,
}: FeelTagProps) => {
  return (
    <S.Layout
      isSelected={activeBtn === feelName}
      onClick={() => activeSetBtn(feelName)}
      width={width}
      height={height}
    >
      {textTitle}
    </S.Layout>
  );
};
