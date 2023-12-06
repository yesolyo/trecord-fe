import { replaceDate } from '@/utils/replaceDate';
import { useNavigate } from 'react-router-dom';
interface AlarmLikeItemProps {
  recordId: number;
  userFromNickname: string;
  recordTitle: string;
  date: string;
}

export const AlarmLikeItem = ({
  recordId,
  userFromNickname,
  recordTitle,
  date,
}: AlarmLikeItemProps) => {
  const navigate = useNavigate();
  return (
    <div
      className="content"
      onClick={() => navigate(`/recordDetail/${recordId}`)}
    >
      <span className="title">
        <strong className="nickname">{userFromNickname}</strong>
        님이 좋아요를 남겼어요:
      </span>
      <span className="body">{recordTitle}</span>
      <span className="date">{replaceDate({ date: date })}</span>
    </div>
  );
};
