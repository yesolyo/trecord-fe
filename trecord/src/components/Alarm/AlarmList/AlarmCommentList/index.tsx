import { Empty } from '@components/common/Empty';
import * as S from './style';
import { Icon } from '@components/common/Icon';
import { Fragment } from 'react';
import useGetCommentAlarm from '@/apis/Alarm/getCommentAlarm';
export const AlarmCommentList = () => {
  const { data: commentAlarmData } = useGetCommentAlarm();
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

  if (commentAlarmData?.content.length === 0) return <Empty {...constant} />;
  else
    return (
      <S.Layout>
        {commentAlarmData?.content.map((a, index) => (
          <Fragment key={a.userFrom.id}>
            <div className="container">
              <Icon iconType="message" width={24} />
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
            {commentAlarmData.content.length - 1 !== index && <S.LineBox />}
          </Fragment>
        ))}
      </S.Layout>
    );
};
