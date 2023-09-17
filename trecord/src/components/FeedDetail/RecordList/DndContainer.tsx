import update from 'immutability-helper';
import type { FC } from 'react';
import { useCallback, useState } from 'react';

import { recordList } from '@/types';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import RecordItem from './RecordItem';
import { useSwapRecords } from '@/apis';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

interface Props {
  feedId: string;
  records: recordList[];
}

const DndContainer: FC<Props> = ({ feedId, records }) => {
  {
    const navigate = useNavigate();
    const { mutate } = useSwapRecords({ feedId });
    const [items, setItems] = useState(records);

    const moveItem = useCallback(
      (dragIndex: number, hoverIndex: number) => {
        console.log(items[dragIndex], items[hoverIndex]);
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
      (id: string, feedId: string) => {
        navigate(`/recordDetail/${id}`, {
          state: {
            feedId,
          },
        });
      },
      [navigate, feedId],
    );

    const renderItem = useCallback((record: recordList, index: number) => {
      return (
        <RecordItem
          key={record.id}
          index={index}
          id={record.id}
          record={record}
          moveItem={moveItem}
          onClick={() => clickItem(record.id.toString(), feedId)}
        />
      );
    }, []);

    return (
      <>
        <StyledDiv>{items.map((item, i) => renderItem(item, i))}</StyledDiv>
      </>
    );
  }
};

export default DndContainer;
