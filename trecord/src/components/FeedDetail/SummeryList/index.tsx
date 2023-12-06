import { recordList } from '@/types/record';
import { CircleTag } from './CircleTag/inedx';
import * as S from './style';
import { Icon } from '@components/common/Icon';
import { Fragment } from 'react';
import { InfiniteData } from '@tanstack/react-query';
import { Page } from '@/types';
interface RecordSummaryProps {
  recordListData: InfiniteData<Page<recordList>> | undefined;
}

export const SummeryList = ({ recordListData }: RecordSummaryProps) => {
  const result: { [dayNumber: number]: any[] } = {};

  // 데이터를 순회하며 dayNumber를 기준으로 객체를 재구성
  recordListData.forEach((item) => {
    const dayNumber = item.dayNumber;
    if (!result[dayNumber]) {
      result[dayNumber] = [];
    }
    result[dayNumber].push({
      id: item.id,
      title: item.title,
      place: item.place,
      latitude: item.latitude,
      longitude: item.longitude,
      imageUrl: item.imageUrl,
      date: item.date,
    });
  });

  return (
    <S.Layout>
      {Object.entries(result).map(([dayKey, dayData]) => (
        <div key={dayKey}>
          <div className="container">
            <div className="circle-line">
              <CircleTag />
              <div className="v-line" />
            </div>
            <Icon iconType="star" width={24} />
            <span className="day">{dayKey}일차</span>
          </div>

          <ul>
            {dayData.map((record) => (
              <Fragment key={record.id}>
                <li className="item">
                  <div className="circle-line">
                    <CircleTag />
                    <div className="v-line" />
                  </div>
                  <span className="place">{record.place}</span>
                </li>
              </Fragment>
            ))}
          </ul>
        </div>
      ))}
    </S.Layout>
  );
};
