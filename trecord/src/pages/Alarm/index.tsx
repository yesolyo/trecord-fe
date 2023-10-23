import { NavBarProfile } from '@components/common/NavBar/NavBarProfile';
import { TabBar } from '@components/common/TabBar';
import { useState } from 'react';

import AlarmFilterBox from '@components/Alarm/AlarmFilterBox';
import { Portal } from '@components/common/Portal';
<<<<<<< HEAD
import { AlarmList } from '@components/Alarm/AlarmList';
=======
>>>>>>> 38f2edd ([FE] 알람 필터 바 개선 (#7))

export interface alarmProps {
  title: string;
  type: string;
}
export const Alarm = () => {
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [alarmType, setAlarmType] = useState<alarmProps>({
    title: '전체',
    type: 'ALL',
  });

  const handleAllAlarm = () => {
    setAlarmType({
      title: '전체',
      type: 'ALL',
    });
    setIsFilterActive(false);
  };
  const handleCommentAlarm = () => {
    setAlarmType({
      title: '댓글',
      type: 'COMMENT',
    });
    setIsFilterActive(false);
  };
  const handleLikeAlarm = () => {
    setAlarmType({
      title: '좋아요',
      type: 'RECORD_LIKE',
    });
    setIsFilterActive(false);
  };

  const handleInvitationAlarm = () => {
    setAlarmType({
      title: '초대',
      type: 'FEED_INVITATION',
    });
    setIsFilterActive(false);
  };
  return (
    <>
<<<<<<< HEAD
      <AlarmList alarmType={alarmType.type} />
=======
      <AlarmAllList alarmType={alarmType.type} />
>>>>>>> 38f2edd ([FE] 알람 필터 바 개선 (#7))
      <Portal>
        <AlarmFilterBox
          openModal={isFilterActive}
          allText="전체"
          commentText="댓글"
          likeText="좋아요"
          invitaitonText="초대"
          onAll={handleAllAlarm}
          onComment={handleCommentAlarm}
          onLike={handleLikeAlarm}
          onInvitation={handleInvitationAlarm}
        />
      </Portal>
      <TabBar currentPage={'alarm'} />
      <NavBarProfile
<<<<<<< HEAD
        title="알림"
=======
        mainTitle="알림"
>>>>>>> 38f2edd ([FE] 알람 필터 바 개선 (#7))
        isButton={true}
        filterText={alarmType.title}
        onClick={() => setIsFilterActive(true)}
      />
    </>
  );
};
