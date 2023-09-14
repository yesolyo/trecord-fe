import { SquareButton } from '@components/common/button/SquareButton';
import * as S from './style';
interface commentUserModalProps {
  openModal: boolean;
  imgUrl: string;
  nickName: string;
  content: string;
  onUserProfile: () => void;
}
export const CommentUserModal = ({ ...props }: commentUserModalProps) => {
  return (
    <S.Layout display={props.openModal ? 'flex' : 'none'}>
      <div className="profile">
        <img src={props.imgUrl} className="user-img" />
        <div className="title">{props.nickName}</div>
        <div className="body">{props.content}</div>
        <SquareButton
          title="확인"
          width="238px"
          height="41px"
          isDark={true}
          onClick={props.onUserProfile}
        />
      </div>
    </S.Layout>
  );
};
