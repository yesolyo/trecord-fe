import { Icon } from '@components/common/Icon';
import * as S from './style';
import { Fragment } from 'react';
import { CommentModal } from '../CommentModal';
import { CommentCateogory } from '../CommentCategory';
export const CommentList = () => {
  const userList = [
    {
      userId: 1,
      userName: '김채원',
      comment:
        'fsggflsfjsdlkfjsdlfjsdlfjsdflsdjfsdlfjsl;dfjslfjsdlfjsdlfjs563564566465464l',
      date: '2023.08.08 11:49',
    },
    {
      userId: 2,
      userName: '윤용현',
      comment: '그래여',
      date: '2023.08.08 12:49',
    },
  ];
  return (
    <S.Layout>
      {userList.map((user, index) => (
        <Fragment key={user.userId}>
          <S.CommentBox>
            <Icon iconType="profile" width={28} />
            <S.CommentDataBox>
              <S.CommentMainDataBox>
                <div className="user_id">{user.userName}</div>
                <CommentCateogory />
              </S.CommentMainDataBox>
              <div className="user_data">{user.comment}</div>
              <div className="user_date">{user.date}</div>
            </S.CommentDataBox>
          </S.CommentBox>
          {userList.length !== index + 1 && <S.LineBox />}
        </Fragment>
      ))}
    </S.Layout>
  );
};
