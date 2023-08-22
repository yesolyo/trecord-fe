import * as S from './style';
import { Icon } from '@components/common/Icon';
import { colorStyles } from '@/styles/color';

interface NavBarBackBtnProps {
  title: string;
  isRegister: boolean;
  disabled?: boolean;
  commentCount?: number;
  onClick?: () => void;
  registerClick?: () => void;
}
export const NavBarNew = ({
  title,
  isRegister,
  disabled,
  commentCount,
  registerClick,
  onClick,
}: NavBarBackBtnProps) => {
  const constant = {
    icon: {
      width: 24,
      fill: colorStyles.gray900,
      onClick: onClick,
    },
    button: {
      title: '등록',
    },
  };

  return (
    <S.Layout isRegister={isRegister}>
      <S.NavBarBox>
        <Icon iconType="arrow" {...constant.icon} />
        <S.TitleBox>{title}</S.TitleBox>
        <S.SaveBox>
          {commentCount ? (
            <div className="comment_count">댓글 수 {commentCount}개</div>
          ) : (
            isRegister && (
              <button disabled={disabled} onClick={registerClick}>
                {constant.button.title}
              </button>
            )
          )}
        </S.SaveBox>
      </S.NavBarBox>
    </S.Layout>
  );
};
