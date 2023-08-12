import { recordList } from '@/types';
import { CircleTag } from './CircleTag/inedx';
import * as S from './style';
import { Icon } from '@components/common/Icon';
interface RecordSummaryProps {
  listData: recordList[];
}

export const RecordSummary = ({ listData }: RecordSummaryProps) => {
  const result = listData.reduce(
    (acc, curr) => {
      const { date } = curr;
      const day = new Date(date).getDate(); // Extract the day from the date
      const dayKey = `${day}일차`; // Create the formatted day key

      if (acc[dayKey]) {
        acc[dayKey].push(curr);
      } else {
        acc[dayKey] = [curr];
      }

      return acc;
    },
    {} as Record<string, typeof listData>,
  );

  console.log('결과', result);
  return (
    <S.Layout>
      {Object.entries(result).map(([dayKey, dayData], index) => (
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

  // return (
  //   <S.Layout>
  //     <S.AlignBox>
  //       <S.DayBox>
  //         <CircleTag />
  //         <Icon iconType="star" width={24} />
  //         <span>Day</span>
  //       </S.DayBox>
  //     </S.AlignBox>

  //     {listData.map((record) => (
  //       <S.DataBox key={record.id}>
  //         <CircleTag />
  //         <span>{record.place}</span>
  //       </S.DataBox>
  //     ))}
  //   </S.Layout>
  // );
};
