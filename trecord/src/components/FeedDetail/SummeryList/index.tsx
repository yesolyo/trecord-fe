import { recordList } from '@/types/record';
import * as S from './style';
import { Icon } from '@components/common/Icon';
import { Fragment } from 'react';
import Pagination from '@components/common/Pagination';
interface RecordSummaryProps {
  recordListData: recordList[] | undefined;
  paginationLoading?: boolean | undefined;
  paginationHasNextPage: boolean | undefined;
  onClickPagination: () => void;
}

export const SummeryList = ({
  recordListData,
  paginationHasNextPage,
  paginationLoading,
  onClickPagination,
}: RecordSummaryProps) => {
  const sortByDayNumber = recordListData?.reduce(
    (acc, curr) => {
      const { dayNumber } = curr;

      if (acc[dayNumber]) acc[dayNumber].push(curr);
      else acc[dayNumber] = [curr];
      return acc;
    },
    {} as Record<string, typeof recordListData>,
  );

  return (
    <S.Layout>
      {sortByDayNumber &&
        Object.entries(sortByDayNumber).map(([dayKey, dayData]) => (
          <div key={dayKey}>
            <div className="container">
              <div className="circle-line">
                <div className="circle-tag" />
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
                      <div className="circle-tag" />
                      <div className="v-line" />
                    </div>
                    <span className="place">{record.place}</span>
                  </li>
                </Fragment>
              ))}
            </ul>
          </div>
        ))}
      {paginationHasNextPage && (
        <Pagination
          text="요약 더보기"
          loading={paginationLoading}
          onClick={() => onClickPagination()}
        />
      )}
    </S.Layout>
  );
};
