import { GetMypageCommentResponse } from '@/types/comment';
import { Icon } from '@components/common/Icon';
import * as S from './style';
import { Fragment } from 'react';
import { MoreButton } from '@components/common/MoreButton';
import { useNavigate } from 'react-router-dom';
import { replaceDate } from '@/utils/replaceDate';
interface Props {
  onModalActive: (id: number) => void;
  commentData: GetMypageCommentResponse;
  onPageCount: () => void;
}
export const MypageCommentList = ({
  onModalActive,
  commentData,
  onPageCount,
}: Props) => {
  const navigate = useNavigate();
  return (
    <S.Layout>
      {commentData.content.map((c, index) => (
        <Fragment key={c.commentId}>
          <S.CommentBox>
            <Icon iconType="message" width={24} />
            <S.TextBox onClick={() => navigate(`/comment/${c.recordId}`)}>
              <S.ContentBox>{c.content}</S.ContentBox>
              <S.DateBox>
                {replaceDate({ date: c.commentCreatedDateTime })}
              </S.DateBox>
            </S.TextBox>

            <Icon
              iconType="close"
              width={24}
              onClick={() => onModalActive(c.commentId)}
            />
          </S.CommentBox>
          {commentData.content.length - 1 !== index && <S.LineBox />}
        </Fragment>
      ))}
      {!commentData.last && <MoreButton title="댓글" onClick={onPageCount} />}
    </S.Layout>
  );
};
