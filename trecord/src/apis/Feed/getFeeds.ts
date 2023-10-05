import { Page } from '@/types';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { http } from '../_http';
import FEED_API_KEY from './constants';
import { Feed } from '@/types/feeds';
interface Props {
  pageCount: number;
}
const getFeeds = async ({ pageCount }: Props): Promise<Page<Feed>> => {
  const url = `/api/v1/feeds?page=0&size=${pageCount}`;
  const response: Page<Feed> = await http.authGet(url);

  return response;
};

const useGetFeeds = ({ pageCount }: Props): UseQueryResult<Page<Feed>> => {
  return useQuery(
    [FEED_API_KEY.FEEDS, { pageCount }],
    () => getFeeds({ pageCount }),
    {
      suspense: true,
    },
  );
};

export default useGetFeeds;
