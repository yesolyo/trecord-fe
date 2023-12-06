import { Page } from '@/types';
import { InfiniteData } from '@tanstack/react-query';

interface Props<T> {
  data: InfiniteData<Page<T>> | undefined;
}
export const getTotalItem = <T>({ data }: Props<T>) => {
  if (data) {
    if (data?.pages[0].content.length === 0) {
      return 0;
    } else {
      if (data?.pages.length * 5 > data.pages[0].totalElements) {
        return data.pages[0].totalElements;
      } else {
        return data.pages.length * 5;
      }
    }
  }
};
