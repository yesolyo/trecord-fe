import { Empty } from '@components/common/Empty';
import * as S from './style';
import { Icon } from '@components/common/Icon';
import { Fragment, useState } from 'react';
import Modal from '@components/common/Modal';
import { ALARM_STATUS_KEY } from '@/types';
import { useAlarmDeleteMutation, useAlarmInfiniteQuery } from '@/apis';
import Pagination from '@components/common/Pagination';
import { AlarmLikeItem } from '../AlarmLikeItem';
import { AlarmCommentItem } from '../AlarmCommentItem';
import { AlarmInviteFeedItem } from '../AlarmInviteFeedItem';

interface DeleteProps {
  id: number;
}

interface Props {
  alarmType: string;
}
export const AlarmList = ({ alarmType }: Props) => {
  const {
    data: alarmListData,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useAlarmInfiniteQuery({ alarmType });
  const { mutate } = useAlarmDeleteMutation();
  const [isModalActive, setIsModalActive] = useState(false);
  const [alarmId, setAlarmId] = useState(0);
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
  const handleDeleteAlarm = ({ id }: DeleteProps) => {
    mutate(
      { id },
      {
        onSuccess: () => {},
      },
    );
    setIsModalActive((prev) => !prev);
  };

  if (alarmListData?.pages[0].content.length === 0)
    return <Empty {...constant} />;
  else
    return (
      <S.Layout>
        {alarmListData?.pages.map((page, pageIndex) =>
          page.content.map((alarm, alarmIndex) => (
            <Fragment key={alarm.id}>
              <div className="container">
                <Icon
                  iconType={
                    ALARM_STATUS_KEY[
                      alarm.type as keyof typeof ALARM_STATUS_KEY
                    ]
                  }
                  width={24}
                />
                {alarm.type === 'COMMENT' && (
                  <AlarmCommentItem
                    recordId={alarm.record.id}
                    userFromNickname={alarm.userFrom.nickname}
                    commentContent={alarm.comment.content}
                    date={alarm.date}
                  />
                )}
                {alarm.type === 'RECORD_LIKE' && (
                  <AlarmLikeItem
                    recordId={alarm.record.id}
                    userFromNickname={alarm.userFrom.nickname}
                    recordTitle={alarm.record.title}
                    date={alarm.date}
                  />
                )}
                {alarm.type === 'FEED_INVITATION' && (
                  <AlarmInviteFeedItem
                    feedId={alarm.feed.id}
                    userFromNickname={alarm.userFrom.nickname}
                    date={alarm.date}
                  />
                )}
                <Icon
                  iconType="close"
                  width={24}
                  onClick={() => {
                    setIsModalActive((prev) => !prev);
                    setAlarmId(alarm.id);
                  }}
                />
              </div>
              {alarmListData.pages[alarmListData.pages.length - 1].content[
                page.content.length - 1
              ] !== alarmListData.pages[pageIndex].content[alarmIndex] && (
                <hr className="line" />
              )}
            </Fragment>
          )),
        )}
        {hasNextPage && (
          <Pagination
            text="알림 더보기"
            loading={isFetching}
            onClick={() => fetchNextPage()}
          />
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
