import { Page } from '@/types';
import { UseQueryResult } from '@tanstack/react-query';
import { useCallback, useEffect, useState } from 'react';

type DefaultQueyFunctionPropsType = { page: number };
type QueryFunctionPropsType<T extends DefaultQueyFunctionPropsType> = T;

interface Props<T1 extends DefaultQueyFunctionPropsType, T2> {
  queryFunctionProps: QueryFunctionPropsType<T1>;
  queryFunction: (props: any) => UseQueryResult<Page<T2>>;
}

interface Returns<T> {
  page: number;
  data: Page<T> | undefined;
  isLoading: boolean;
  paginationClickEventHandler: () => void;
}

const usePagedData = <T1 extends DefaultQueyFunctionPropsType, T2>({
  queryFunctionProps,
  queryFunction,
}: Props<T1, T2>): Returns<T2> => {
  const [page, setPage] = useState(0);
  const { data: fetchedData, isLoading } = queryFunction({
    ...queryFunctionProps,
    page,
  });
  const [cachedData, setCachedData] = useState<Page<T2>>({
    first: true,
    last: true,
    size: 10,
    number: -1,
    numberOfElements: 0,
    totalPages: 0,
    totalElements: 0,
    empty: true,
    content: [],
  });

  const handleClickPagination = useCallback(() => {
    if (!fetchedData?.last) setPage((prev) => prev + 1);
  }, [fetchedData?.last]);

  useEffect(() => {
    if (fetchedData) {
      if (fetchedData.first) setCachedData(fetchedData);
      else if (fetchedData.number === (cachedData?.number ?? 0) + 1) {
        const newData = JSON.parse(JSON.stringify(fetchedData)) as Page<T2>;
        newData.content = [...cachedData.content, ...fetchedData.content];
        setCachedData(newData);
      }
    }
  }, [fetchedData]);

  return {
    page,
    data: cachedData,
    isLoading,
    paginationClickEventHandler: handleClickPagination,
  };
};

export default usePagedData;
