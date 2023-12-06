import { Icon } from '@components/common/Icon';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { replaceDate } from '@/utils/replaceDate';
import { GetMypageComment } from '@/types/mypage';
interface MyPageCommentItemProps {
  comment: GetMypageComment;
  onModalActive: (id: number) => void;
}
export const MyPageCommentItem = ({
  comment,
  onModalActive,
}: MyPageCommentItemProps) => {
  const navigate = useNavigate();
  return (
    <S.Layout>
      <Icon iconType="message" width={24} />
      <div
        className="text_box"
        onClick={() => navigate(`/comment/${comment.recordId}`)}
      >
        <span className="content_box">{comment.content}</span>
        <span className="date_box">
          {replaceDate({ date: comment.commentCreatedDateTime })}
        </span>
      </div>
      <Icon
        iconType="close"
        width={24}
        onClick={() => onModalActive(comment.commentId)}
      />
    </S.Layout>
  );
};
