import { NavBarProfile } from '@components/common/NavBar/NavBarProfile';
import { TabBar } from '@components/common/TabBar';
import * as S from './style';

import { useState } from 'react';
import useGetAllAlarm from '@/apis/Alarm/getAlarm';
import { AlarmList } from '@components/Alarm/AlarmList';
import AlarmFilterBox from '@components/Alarm/AlarmFilterBox';
import useGetCommentAlarm from '@/apis/Alarm/getCommentAlarm';
import useGetLikeAlarm from '@/apis/Alarm/getLikeAlarm';
interface alarmProps {
  isAll: boolean;
  isComment: boolean;
  isLike: boolean;
}
export const Alarm = () => {
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [isAlarm, setIsAlarm] = useState<alarmProps>({
    isAll: true,
    isComment: false,
    isLike: false,
  });
  const { data: allAlarmData } = useGetAllAlarm();
  const { data: commentAlarmData } = useGetCommentAlarm();
  const { data: likeAlarmData } = useGetLikeAlarm();

  const handleAllAlarm = () => {
    setIsAlarm({
      isAll: true,
      isComment: false,
      isLike: false,
    });
    setIsFilterActive(false);
  };
  const handleCommentAlarm = () => {
    setIsAlarm({
      isAll: false,
      isComment: true,
      isLike: false,
    });
    setIsFilterActive(false);
  };
  const handleLikeAlarm = () => {
    setIsAlarm({
      isAll: false,
      isComment: false,
      isLike: true,
    });
    setIsFilterActive(false);
  };

  return (
    <S.Layout>
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
      <AlarmFilterBox
        openModal={isFilterActive}
        allText="전체"
        commentText="댓글"
        likeText="좋아요"
        onAll={handleAllAlarm}
        onComment={handleCommentAlarm}
        onLike={handleLikeAlarm}
      />
      {isAlarm.isAll && allAlarmData && <AlarmList {...allAlarmData} />}
      {isAlarm.isComment && commentAlarmData && (
        <AlarmList {...commentAlarmData} />
      )}
      {isAlarm.isLike && likeAlarmData && <AlarmList {...likeAlarmData} />}
      <TabBar currentPage={'alarm'} />
    </S.Layout>
  );
};
