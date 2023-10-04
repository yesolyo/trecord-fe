import { Page } from '@/types';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { http } from '../_http';
import FEED_API_KEY from './constants';
import { Feed } from '@/types/feeds';

const getFeeds = async (): Promise<Page<Feed>> => {
  const url = `/api/v1/feeds`;
  const response: Page<Feed> = await http.authGet(url);

  return response;
};

const useGetFeeds = (): UseQueryResult<Page<Feed>> => {
  return useQuery([FEED_API_KEY.FEEDS], () => getFeeds(), { suspense: true });
};

export default useGetFeeds;
