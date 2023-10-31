import { Icon } from '@components/common/Icon';
import * as S from './style';
import { SquareBtn } from '@components/common/SquareBtn';
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
        {props.imgUrl ? (
          <img src={props.imgUrl} className="user-img" />
        ) : (
          <Icon iconType="profile" width={74} />
        )}

        <div className="title">{props.nickName}</div>
        <div className="body">{props.content}</div>
        <SquareBtn title="확인" isDark={true} onClick={props.onUserProfile} />
      </div>
    </S.Layout>
  );
};
