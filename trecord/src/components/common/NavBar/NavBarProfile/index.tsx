import * as S from './style';
interface navBarProfileProps {
  mainTitle: string;
  subTitle?: string;
}
export const NavBarProfile = ({ mainTitle, subTitle }: navBarProfileProps) => {
  return (
    <S.TextBox>
      <span className="profile_main-title">{mainTitle}</span>
      <span className="profile_sub-title">{subTitle}</span>
    </S.TextBox>
  );
};
