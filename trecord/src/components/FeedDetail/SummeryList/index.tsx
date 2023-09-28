import { recordList } from '@/types';
import { CircleTag } from './CircleTag/inedx';
import * as S from './style';
import { Icon } from '@components/common/Icon';
interface RecordSummaryProps {
  listData: recordList[];
}

export const SummeryList = ({ listData }: RecordSummaryProps) => {
  const result: { [dayNumber: number]: any[] } = {};

  // 데이터를 순회하며 dayNumber를 기준으로 객체를 재구성
  listData.forEach((item) => {
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
          <S.DayBox>
            <CircleTag />
            <Icon iconType="star" width={24} />
            <h2>{dayKey}</h2>
          </S.DayBox>

          <ul>
            {dayData.map((record) => (
              <S.DataBox key={record.id}>
                <CircleTag />
                <span>{record.place}</span>
              </S.DataBox>
            ))}
          </ul>
        </div>
      ))}
    </S.Layout>
  );
};
