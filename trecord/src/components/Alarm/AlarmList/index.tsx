import { Empty } from '@components/common/Empty';
import * as S from './style';
import { GetAllAlarmResponse } from '@/types/alarm';
import { Icon } from '@components/common/Icon';
import { alarmStatusKeys } from './constant';
import { Fragment } from 'react';
export const AlarmList = ({ ...props }: GetAllAlarmResponse) => {
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

  if (props?.notifications.length === 0) return <Empty {...constant} />;
  else
    return (
      <S.Layout>
        {props?.notifications.map((a, index) => (
          <Fragment key={a.userFrom.id}>
            <div className="container">
              <Icon
                iconType={
                  alarmStatusKeys[a.type as keyof typeof alarmStatusKeys]
                }
                width={24}
              />
              <div className="content">
                <span className="title">
                  <strong className="nickname">{a.type}</strong>님이 댓글을
                  남겼어요:
                </span>
                <span className="body">{a.content}</span>
                <span className="date">{a.date}</span>
              </div>
              <Icon iconType="close" width={24} />
            </div>
            {props.notifications.length - 1 !== index && <S.LineBox />}
          </Fragment>
        ))}
      </S.Layout>
    );
};
