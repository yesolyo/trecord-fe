import { Empty } from '@components/common/Empty';
import * as S from './style';
import { Icon } from '@components/common/Icon';
import { Fragment } from 'react';
import useGetInvitationAlarm from '@/apis/Alarm/getInvitaionAlarm';
export const AlarmInvitationList = () => {
  const { data: invitationAlarmData } = useGetInvitationAlarm();
  const constant = {
    icon: {
      width: 111.37,
      height: 73,
    },
    title: '앗!',
    subTitle: [
      {
        id: 1,
        body: '아직 온 알림이 없어요.',
      },
    ],
  };

  if (invitationAlarmData?.content.length === 0) return <Empty {...constant} />;
  else
    return (
      <S.Layout>
        {invitationAlarmData?.content.map((a, index) => (
          <Fragment key={a.userFrom.id}>
            <div className="container">
              <Icon iconType="message" width={24} />
              <div className="content">
                <span className="title">
                  <strong className="nickname">{a.userFrom.nickname}</strong>
                  님이 피드에 초대했어요
                </span>
                <span className="date">{a.date}</span>
              </div>
              <Icon iconType="close" width={24} />
            </div>
            {invitationAlarmData.content.length - 1 !== index && <S.LineBox />}
          </Fragment>
        ))}
      </S.Layout>
    );
};
