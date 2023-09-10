import { NavBarProfile } from '@components/common/NavBar/NavBarProfile';
import { TabBar } from '@components/common/TabBar';
import * as S from './style';

import { Suspense, useState } from 'react';
import useGetAllAlarm from '@/apis/Alarm/getAlarm';
import { AlarmList } from '@components/Alarm/AlarmList';
import { GetAllAlarmResponse } from '@/types/alarm';
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
  console.log(allAlarmData);
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

  const mockdata: GetAllAlarmResponse = {
    notifications: [
      {
        type: 'RECORD_LIKE',
        status: 'UNREAD',
        content: 'nickname1님이 회원님의 기록을 좋아합니다.',
        userFrom: {
          id: 1,
          nickname: '하혜림',
        },
        record: {
          id: 1,
          title: 'title',
        },
        comment: {
          id: 1,
          parentId: 'ㅇㄹㅇㄹ',
          content: 'ㅎㅇㄴㄹ',
        },
        date: '2023-09-08T19:57',
      },
      {
        type: 'RECORD_LIKE',
        status: 'UNREAD',
        content: 'nickname3님이 회원님의 기록을 좋아합니다.',
        userFrom: {
          id: 2,
          nickname: '안예림',
        },
        record: {
          id: 1,
          title: 'title',
        },
        date: '2023-09-08T19:57',
      },
    ],
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
      <Suspense fallback={<div>Loading...</div>}>
        {isAlarm.isAll && allAlarmData && <AlarmList {...allAlarmData} />}
        {isAlarm.isComment && commentAlarmData && (
          <AlarmList {...commentAlarmData} />
        )}
        {isAlarm.isLike && likeAlarmData && <AlarmList {...likeAlarmData} />}
      </Suspense>

      <TabBar currentPage={'alarm'} />
    </S.Layout>
  );
};
