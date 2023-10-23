import { Icon } from '@components/common/Icon';
import * as S from './style';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { replaceDate } from '@/utils/replaceDate';
import Pagination from '@components/common/Pagination';
import { Page } from '@/types';
import { GetMypageComment } from '@/types/mypage';
interface Props {
  onModalActive: (id: number) => void;
  commentData: Page<GetMypageComment>;
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
      {!commentData.last && (
        <Pagination text="댓글 더보기" onClick={onPageCount} />
      )}
    </S.Layout>
  );
};
