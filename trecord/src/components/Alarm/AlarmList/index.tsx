import { Empty } from '@components/common/Empty';
import * as S from './style';
import { Icon } from '@components/common/Icon';
import { Fragment, useState } from 'react';
import useGetAlarm from '@/apis/Alarm/getAlarm';
import { useNavigate } from 'react-router-dom';
import useDeleteAlarm from '@/apis/Alarm/deleteAlarm';
import Modal from '@components/common/Modal';
import { replaceDate } from '@/utils/replaceDate';
import Pagination from '@components/common/Pagination';
<<<<<<< HEAD:trecord/src/components/Alarm/AlarmList/index.tsx
import { ALARM_STATUS_KEY } from '@/types';
=======
>>>>>>> 38f2edd ([FE] 알람 필터 바 개선 (#7)):trecord/src/components/Alarm/AlarmList/AlarmAllList/index.tsx
interface DeleteProps {
  id: number;
}

interface Props {
  alarmType: string;
}
<<<<<<< HEAD:trecord/src/components/Alarm/AlarmList/index.tsx
export const AlarmList = ({ alarmType }: Props) => {
=======
export const AlarmAllList = ({ alarmType }: Props) => {
>>>>>>> 38f2edd ([FE] 알람 필터 바 개선 (#7)):trecord/src/components/Alarm/AlarmList/AlarmAllList/index.tsx
  const [pageCount, setPageCount] = useState(10);
  const { data: AlarmData, refetch } = useGetAlarm({
    pageCount,
    alarmType,
  });
  const { mutate } = useDeleteAlarm();
  const [isModalActive, setIsModalActive] = useState(false);
  const [alarmId, setAlarmId] = useState(0);

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
  const handleMorePage = () => {
    setPageCount((prev) => prev + 10);
  };

  const handleDeleteAlarm = ({ id }: DeleteProps) => {
    mutate(
      { id },
      {
        onSuccess: () => {
          refetch();
        },
      },
    );
    setIsModalActive((prev) => !prev);
  };

  if (AlarmData?.content.length === 0) return <Empty {...constant} />;
  else
    return (
      <S.Layout>
        {AlarmData?.content.map((a, index) => (
          <Fragment key={a.id}>
            <div className="container">
              <Icon
                iconType={
                  ALARM_STATUS_KEY[a.type as keyof typeof ALARM_STATUS_KEY]
                }
                width={24}
              />

              {a.type === 'COMMENT' && (
                <div
                  className="content"
                  onClick={() => navigate(`/comment/${a.record.id}`)}
                >
                  <span className="title">
                    <strong className="nickname">
                      <b>{a.userFrom.nickname}</b>
                    </strong>
                    님이 댓글을 남겼어요:
                  </span>
                  <span className="body">{a.comment.content}</span>
                  <span className="date">{replaceDate({ date: a.date })}</span>
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
                  <span className="date">{replaceDate({ date: a.date })}</span>
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
                  <span className="date">{replaceDate({ date: a.date })}</span>
                </div>
              )}
              <Icon
                iconType="close"
                width={24}
                onClick={() => {
                  setIsModalActive((prev) => !prev);
                  setAlarmId(a.id);
                }}
              />
            </div>
            {AlarmData.content.length - 1 !== index && <S.LineBox />}
          </Fragment>
        ))}
        {!AlarmData?.last && (
          <Pagination text="알림 더보기" onClick={handleMorePage} />
        )}
        <Modal
          openModal={isModalActive}
          title="알림을 삭제할까요?"
          closeText="취소"
          confirmText="삭제"
          onClose={() => setIsModalActive((prev) => !prev)}
          onConfirm={() => handleDeleteAlarm({ id: alarmId })}
        />
      </S.Layout>
    );
};
