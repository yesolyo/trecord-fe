import { SquareButton } from '@components/common/button/SquareButton';
import * as S from './style';
interface commentUserModalProps {
  imgUrl: string;
  nickName: string;
  content: string;
  isUserProfile: React.Dispatch<React.SetStateAction<boolean>>;
}
export const CommentUserModal = ({ ...props }: commentUserModalProps) => {
  return (
    <S.Layout>
      <S.ProfileBox>
        <S.ImgBox src={props.imgUrl} />
        <S.NickNameBox>{props.nickName}</S.NickNameBox>
        <S.ContentBox>{props.content}</S.ContentBox>
        <SquareButton
          title="확인"
          width="238px"
          height="41px"
          isDark={true}
          onClick={() => props.isUserProfile(false)}
        />
      </S.ProfileBox>
    </S.Layout>
  );
};
