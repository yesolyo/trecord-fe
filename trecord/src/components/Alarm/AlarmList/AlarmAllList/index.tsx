import { Empty } from '@components/common/Empty';
import * as S from './style';
import { Icon } from '@components/common/Icon';
import { alarmStatusKeys } from './constant';
import { Fragment } from 'react';
import useGetAllAlarm from '@/apis/Alarm/getAlarm';
import { useNavigate } from 'react-router-dom';
import useDeleteAlarm from '@/apis/Alarm/deleteAlarm';
interface Props {
  id: number;
}
export const AlarmAllList = () => {
  const { data: allAlarmData, refetch } = useGetAllAlarm();
  const { mutate } = useDeleteAlarm();
  const navigate = useNavigate();

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

  const handleDeleteAlarm = ({ id }: Props) => {
    mutate(
      { id },
      {
        onSuccess: () => {
          refetch();
        },
      },
    );
  };

  if (allAlarmData?.content.length === 0) return <Empty {...constant} />;
  else
    return (
      <S.Layout>
        {allAlarmData?.content.map((a, index) => (
          <Fragment key={a.userFrom.id}>
            <div className="container">
              <Icon
                iconType={
                  alarmStatusKeys[a.type as keyof typeof alarmStatusKeys]
                }
                width={24}
              />

              {a.type === 'COMMENT' && (
                <div
                  className="content"
                  onClick={() => navigate(`/comment/${a.record.id}`)}
                >
                  <span className="title">
                    <strong className="nickname">{a.userFrom.nickname}</strong>
                    님이 댓글을 남겼어요:
                  </span>
                  <span className="body">{a.content}</span>
                  <span className="date">{a.date}</span>
                </div>
              )}
              {a.type === 'RECORD_LIKE' && (
                <div
                  className="content"
                  onClick={() => navigate(`/recordDetail/${a.record.id}`)}
                >
                  <span className="title">
                    <strong className="nickname">{a.userFrom.nickname}</strong>
                    님이 좋아요를 남겼어요:
                  </span>
                  <span className="body">{a.record.title}</span>
                  <span className="date">{a.date}</span>
                </div>
              )}
              {a.type === 'FEED_INVITATION' && (
                <div
                  className="content"
                  onClick={() => navigate(`/feedDetail/${a.feed.id}`)}
                >
                  <span className="title">
                    <strong className="nickname">{a.userFrom.nickname}</strong>
                    님이 피드에 초대했어요
                  </span>
                  <span className="date">{a.date}</span>
                </div>
              )}
              <Icon
                iconType="close"
                width={24}
                onClick={() => handleDeleteAlarm({ id: a.id })}
              />
            </div>
            {allAlarmData.content.length - 1 !== index && <S.LineBox />}
          </Fragment>
        ))}
      </S.Layout>
    );
};
