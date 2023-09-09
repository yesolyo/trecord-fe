import { NavBarProfile } from '@components/common/NavBar/NavBarProfile';
import { TabBar } from '@components/common/TabBar';
import { NativeEventSource, EventSourcePolyfill } from 'event-source-polyfill';

import * as S from './style';

import { useEffect, useState } from 'react';
import { getAlarm } from '@/apis/Alarm/getAlarm';
import { AlarmList } from '@components/Alarm/AlarmList';
import { GetAlarm, GetAlarmResponse } from '@/types/alarm';
import AlarmFilterBox from '@components/Alarm/AlarmFilterBox';
export const Alarm = () => {
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [alarm, setAlarm] = useState<GetAlarmResponse>();
  // const getToken = localStorage.getItem('acessToken');
  // const EventSource = EventSourcePolyfill || NativeEventSource;
  // useEffect(() => {
  //   if (!isLoading && getToken) {
  //     const fetchSse = async () => {
  //       try {
  //         const sse = new EventSource(
  //           `${
  //             import.meta.env.VITE_BASE_URL
  //           }/api/v1/notifications/subscribe?token=${getToken}`,
  //           {
  //             withCredentials: true,
  //           },
  //         );
  //         sse.onmessage = async (e) => {
  //           console.log('데이터입니다', e);
  //         };
  //         sse.onerror = async (e) => {
  //           console.log('에러입니다', e);
  //           sse.close();
  //         };
  //       } catch (error) {}
  //     };
  //     fetchSse();
  //   }
  // }, []);

  useEffect(() => {
    getAlarm().then((e) => {
      setAlarm(e);
    });
  }, []);

  // const mockdata: GetAlarmResponse = {
  //   notifications: [
  //     {
  //       type: 'COMMENT',
  //       status: 'READ',
  //       recordId: 1,
  //       commentId: 2,
  //       senderId: 1,
  //       senderNickname: '짱구',
  //       content:
  //         'ㅋㅋㅋㅋㅋ웃기네ㅇㄹㅇㄴㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴ',
  //       date: '2023-08-10T14:00',
  //     },
  //     {
  //       type: 'RECORD_LIKE',
  //       status: 'READ',
  //       recordId: 1,
  //       commentId: 3,
  //       senderId: 1,
  //       senderNickname: '짱구',
  //       content: '짱구님이 회원의 기록을 좋아합니다',
  //       date: '2023-08-10T14:00',
  //     },
  //   ],
  // };

  return (
    <S.Layout>
      <NavBarProfile
        mainTitle="알림"
        isButton={true}
        onClick={() => setIsFilterActive(true)}
      />
      <AlarmFilterBox openModal={isFilterActive} body={'d'} />
      {alarm && <AlarmList {...alarm} />}
      <TabBar currentPage={'alarm'} />
    </S.Layout>
  );
};
