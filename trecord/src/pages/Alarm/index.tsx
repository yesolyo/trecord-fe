import { NavBarProfile } from '@components/common/NavBar/NavBarProfile';
import { TabBar } from '@components/common/TabBar';
import * as S from './style';
import { useState } from 'react';
import { AlarmAllList } from '@components/Alarm/AlarmList/AlarmAllList';
import AlarmFilterBox from '@components/Alarm/AlarmFilterBox';
import { AlarmInvitationList } from '@components/Alarm/AlarmList/AlarmInvitationList';
import { AlarmCommentList } from '@components/Alarm/AlarmList/AlarmCommentList';
import { AlarmLikeList } from '@components/Alarm/AlarmList/AlarmLikeList';
interface alarmProps {
  isAll: boolean;
  isComment: boolean;
  isLike: boolean;
  isInvitation: boolean;
}
export const Alarm = () => {
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [isAlarm, setIsAlarm] = useState<alarmProps>({
    isAll: true,
    isComment: false,
    isLike: false,
    isInvitation: false,
  });

  const handleAllAlarm = () => {
    setIsAlarm({
      isAll: true,
      isComment: false,
      isLike: false,
      isInvitation: false,
    });
    setIsFilterActive(false);
  };
  const handleCommentAlarm = () => {
    setIsAlarm({
      isAll: false,
      isComment: true,
      isLike: false,
      isInvitation: false,
    });
    setIsFilterActive(false);
  };
  const handleLikeAlarm = () => {
    setIsAlarm({
      isAll: false,
      isComment: false,
      isLike: true,
      isInvitation: false,
    });
    setIsFilterActive(false);
  };

  const handleInvitationAlarm = () => {
    setIsAlarm({
      isAll: false,
      isComment: false,
      isLike: false,
      isInvitation: true,
    });
    setIsFilterActive(false);
  };

  return (
    <>
      {isAlarm.isAll && (
        <NavBarProfile
          mainTitle="알림"
          isButton={true}
          filterText="전체"
          onClick={() => setIsFilterActive(true)}
        />
      )}
      {isAlarm.isComment && (
        <NavBarProfile
          mainTitle="알림"
          isButton={true}
          filterText="댓글"
          onClick={() => setIsFilterActive(true)}
        />
      )}
      {isAlarm.isLike && (
        <NavBarProfile
          mainTitle="알림"
          isButton={true}
          filterText="좋아요"
          onClick={() => setIsFilterActive(true)}
        />
      )}
      {isAlarm.isInvitation && (
        <NavBarProfile
          mainTitle="알림"
          isButton={true}
          filterText="초대"
          onClick={() => setIsFilterActive(true)}
        />
      )}
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
      {isAlarm.isAll && <AlarmAllList />}
      {isAlarm.isComment && <AlarmCommentList />}
      {isAlarm.isLike && <AlarmLikeList />}
      {isAlarm.isInvitation && <AlarmInvitationList />}

      <TabBar currentPage={'alarm'} />
    </>
  );
};
