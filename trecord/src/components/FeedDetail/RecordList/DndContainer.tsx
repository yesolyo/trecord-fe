import update from 'immutability-helper';
import type { FC } from 'react';
import { useCallback, useEffect, useState } from 'react';

import { Page } from '@/types';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import RecordItem from './RecordItem';
import { useSwapRecords } from '@/apis';

import { recordList } from '@/types/record';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

interface Props {
  paginationLoading?: boolean;
  onClickPagination: () => void;
  feedId: string;
  records: recordList[];
  endDate: string;
  startDate: string;
}

const DndContainer: FC<Props> = ({ feedId, records, endDate, startDate }) => {
  {
    const navigate = useNavigate();
    const { mutate } = useSwapRecords({ feedId });
    const [items, setItems] = useState<recordList[]>([]);
    const moveItem = useCallback(
      (dragIndex: number, hoverIndex: number) => {
        setItems((prevCards: recordList[]) =>
          update(prevCards, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, prevCards[dragIndex] as recordList],
            ],
          }),
        );
        mutate({
          originalRecordId: items[dragIndex].id,
          targetRecordId: items[hoverIndex].id,
        });
      },
      [mutate],
    );

    const clickItem = useCallback(
      (id: string, feedId: string, startDate: string, endDate: string) => {
        navigate(`/recordDetail/${id}`, {
          state: {
            feedId,
            endDate,
            startDate,
          },
        });
      },
      [navigate, feedId, endDate, startDate],
    );

    const renderItem = useCallback((record: recordList, index: number) => {
      return (
        <RecordItem
          key={record.id}
          index={index}
          id={record.id}
          record={record}
          moveItem={moveItem}
          onClick={() =>
            clickItem(record.id.toString(), feedId, startDate, endDate)
          }
        />
      );
    }, []);

    useEffect(() => {
      setItems(records);
    }, [records]);
    return <StyledDiv>{items.map((item, i) => renderItem(item, i))}</StyledDiv>;
  }
};

export default DndContainer;
