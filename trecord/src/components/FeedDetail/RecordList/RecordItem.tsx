import type { Identifier, XYCoord } from 'dnd-core';
import type { FC } from 'react';
import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import * as S from './style';
import { recordList } from '@/types';
import { Icon } from '@components/common/Icon';

interface Props {
  id: any;
  index: number;
  record: recordList;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
  onClick: () => void;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

const RecordItem: FC<Props> = ({ id, index, record, moveItem, onClick }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ handlerId }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: 'item',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveItem(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'item',
    item: () => {
      return { id, index };
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <S.ItemBox
      ref={ref}
      style={{ opacity }}
      data-handler-id={handlerId}
      onClick={onClick}
    >
      <S.DataBox>
        {record.imageUrl && <S.ImgBox src={record.imageUrl}></S.ImgBox>}
        <div className="record_title">{record.title}</div>
        <div className="icon-container">
          <Icon iconType="change" width={24} height={24} />
        </div>
      </S.DataBox>
    </S.ItemBox>
  );
};

export default RecordItem;
