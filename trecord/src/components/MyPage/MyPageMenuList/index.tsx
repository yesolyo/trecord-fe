import { useNavigate } from 'react-router-dom';
import { MyPageMenuItem, mypageMenuProps } from '../MyPageMenuItem';
import { Fragment } from 'react';
import { MyPageUser } from '@/types/user';
import * as S from './style';
interface Props {
  userProfileData: MyPageUser;
  onIsLogoutModal: () => void;
}
export const MyPageMenuList = ({ onIsLogoutModal }: Props) => {
  const navigate = useNavigate();
  const menuList: mypageMenuProps[] = [
    {
      title: '서비스 설정',
      menuList: [
        {
          id: 1,
          btnIcon: 'userEdit',
          btnTitle: '프로필 변경',
          onClick: () => navigate('/modifyProfile'),
        },
      ],
    },
    {
      title: '나의 활동',
      menuList: [
        {
          id: 1,
          btnIcon: 'heart',
          btnTitle: '좋아요',
          onClick: () => navigate('/mypageLike'),
        },
        {
          id: 2,
          btnIcon: 'message',
          btnTitle: '댓글',
          onClick: () => navigate('/mypageComment'),
        },
        {
          id: 3,
          btnIcon: 'invite',
          btnTitle: '초대된 피드',
          onClick: () => navigate('/mypageInvite'),
        },
      ],
    },
    {
      title: '기타',
      menuList: [
        {
          id: 1,
          btnTitle: '로그아웃',
          onClick: onIsLogoutModal,
        },
      ],
    },
  ];

  return (
    <S.Layout>
      {menuList.map((item, index) => (
        <Fragment key={item.title}>
          <MyPageMenuItem {...item} />
          {index !== menuList.length - 1 && <hr className="line_thin" />}
        </Fragment>
      ))}
    </S.Layout>
  );
};
