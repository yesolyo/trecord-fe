import { Empty } from '@components/common/Empty';
import * as S from './style';
import { Icon } from '@components/common/Icon';
import { Fragment } from 'react';
import useGetLikeAlarm from '@/apis/Alarm/getLikeAlarm';
export const AlarmLikeList = () => {
  const { data: likeAlarmData } = useGetLikeAlarm();
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

  if (likeAlarmData?.content.length === 0) return <Empty {...constant} />;
  else
    return (
      <S.Layout>
        {likeAlarmData?.content.map((a, index) => (
          <Fragment key={a.userFrom.id}>
            <div className="container">
              <Icon iconType="message" width={24} />
              <div className="content">
                <span className="title">
                  <strong className="nickname">{a.userFrom.nickname}</strong>
                  님이 좋아요를 남겼어요:
                </span>
                <span className="body">{a.record.title}</span>
                <span className="date">{a.date}</span>
              </div>
              <Icon iconType="close" width={24} />
            </div>
            {likeAlarmData.content.length - 1 !== index && <S.LineBox />}
          </Fragment>
        ))}
      </S.Layout>
    );
};
