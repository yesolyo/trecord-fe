import { NavBarProfile } from '@components/common/navBar/NavBarProfile';
import { TabBar } from '@components/common/TabBar';
import { useState } from 'react';

import AlarmFilterBox from '@components/Alarm/AlarmFilterBox';
import { Portal } from '@components/common/Portal';
import { AlarmList } from '@components/Alarm/AlarmList';

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
      <AlarmList alarmType={alarmType.type} />
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
        mainTitle="알림"
        isButton={true}
        filterText={alarmType.title}
        onClick={() => setIsFilterActive(true)}
      />
    </>
  );
};
