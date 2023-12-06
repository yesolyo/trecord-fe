import { replaceDate } from '@/utils/replaceDate';
import { useNavigate } from 'react-router-dom';
interface AlarmInviteFeedItemProps {
  feedId: number;
  userFromNickname: string;
  date: string;
}
export const AlarmInviteFeedItem = ({
  feedId,
  userFromNickname,
  date,
}: AlarmInviteFeedItemProps) => {
  const navigate = useNavigate();
  return (
    <div className="content" onClick={() => navigate(`/feedDetail/${feedId}`)}>
      <span className="title">
        <strong className="nickname">{userFromNickname}</strong>
        님이 피드에 초대했어요
      </span>
      <span className="date">{replaceDate({ date: date })}</span>
    </div>
  );
};
