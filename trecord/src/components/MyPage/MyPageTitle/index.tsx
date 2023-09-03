import { Icon } from '@components/common/Icon';
import * as S from './style';
interface mypageTitleProps {
  imgUrl: string;
  nickname: string;
  introduce: string;
}
export const MyPageTitle = ({ ...props }: mypageTitleProps) => {
  return (
    <S.Layout>
      {props.imgUrl.length > 0 ? (
        <S.ImgBox src={props.imgUrl} width={54} height={54} />
      ) : (
        <Icon iconType="profile" width={54} />
      )}
      <S.ProfileBox>
        <S.NameBox>{props.nickname}</S.NameBox>
        <S.IntroduceBox>{props.introduce}</S.IntroduceBox>
      </S.ProfileBox>
    </S.Layout>
  );
};
