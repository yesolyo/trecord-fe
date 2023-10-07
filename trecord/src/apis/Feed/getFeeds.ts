import { Page } from '@/types';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { http } from '../_http';
import FEED_API_KEY from './constants';
import { Feed } from '@/types/feeds';

interface Props {
  page: number;
}

const getFeeds = async ({ page }: Props): Promise<Page<Feed>> => {
  const url = `/api/v1/feeds?page=${page}&size=5`;
  const response: Page<Feed> = await http.authGet(url);

  return response;
};

const useGetFeeds = ({ page }: Props): UseQueryResult<Page<Feed>> => {
  return useQuery([FEED_API_KEY.FEEDS, { page }], () => getFeeds({ page }), {
    suspense: true,
  });
};

export default useGetFeeds;
