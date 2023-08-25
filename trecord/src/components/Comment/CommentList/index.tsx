import { Icon } from '@components/common/Icon';
import * as S from './style';
import { Fragment, useEffect, useState } from 'react';
import { CommentCateogory } from '../CommentCategory';
import { getNewComment } from '@/apis/Comment/postNewComment';
import { useParams } from 'react-router-dom';
import { GetCommentProps } from '@/types/comment';

export const CommentList = () => {
  const { id } = useParams();
  const [comment, setComment] = useState<GetCommentProps[]>([]);
  useEffect(() => {
    getNewComment({ recordId: Number(id) }).then((data) => {
      setComment(data.comments);
    });
  }, []);

  // const userList = [
  //   {
  //     userId: 1,
  //     userName: '김채원',
  //     comment:
  //       'fsggflsfjsdlkfjsdlfjsdlfjsdflsdjfsdlfjsl;dfjslfjsdlfjsdlfjs563564566465464l',
  //     date: '2023.08.08 11:49',
  //   },
  //   {
  //     userId: 2,
  //     userName: '윤용현',
  //     comment: '그래여',
  //     date: '2023.08.08 12:49',
  //   },
  // ];
  return (
    <S.Layout>
      {comment.map((user, index) => (
        <Fragment key={user.commentId}>
          <S.CommentBox>
            <Icon iconType="profile" width={28} />
            <S.CommentDataBox>
              <S.CommentMainDataBox>
                <div className="user_id">{user.commenterId}</div>
                <CommentCateogory />
              </S.CommentMainDataBox>
              <div className="user_data">{user.commenterImageUrl}</div>
              <div className="user_date">{user.content}</div>
            </S.CommentDataBox>
          </S.CommentBox>
          {comment.length !== index + 1 && <S.LineBox />}
        </Fragment>
      ))}
    </S.Layout>
  );
};
