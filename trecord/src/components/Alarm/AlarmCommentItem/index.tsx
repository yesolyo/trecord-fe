import { replaceDate } from '@/utils/replaceDate';
import { useNavigate } from 'react-router-dom';
interface AlarmCommentItemProps {
  recordId: number;
  userFromNickname: string;
  commentContent: string;
  date: string;
}
export const AlarmCommentItem = ({
  recordId,
  userFromNickname,
  commentContent,
  date,
}: AlarmCommentItemProps) => {
  const navigate = useNavigate();
  return (
    <div className="content" onClick={() => navigate(`/comment/${recordId}`)}>
      <span className="title">
        <strong className="nickname">
          <b>{userFromNickname}</b>
        </strong>
        님이 댓글을 남겼어요:
      </span>
      <span className="body">{commentContent}</span>
      <span className="date">{replaceDate({ date: date })}</span>
    </div>
  );
};
