import { ReactElement } from 'react';
import * as S from './style';

interface SkeletonProps {
  num?: number;
  width?: string;
  height?: string;
}

const Skeleton = ({
  num = 1,
  width = undefined,
  height = undefined,
}: SkeletonProps): ReactElement => {
  return (
    <>
      {new Array(num)
        .fill(0)
        .map((x, i) => x + i)
        .map((y) => (
          <S.Layout key={y} width={width} height={height} />
        ))}
    </>
  );
};

export default Skeleton;
