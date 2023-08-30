import { feedList } from '@/types';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { http } from '../_http';
import FEED_API_KEY from './constants';

const getFeeds = async (): Promise<feedList[]> => {
  const url = `/api/v1/feeds`;
  const response: { feeds: feedList[] } = await http.get(url);

  return response.feeds;
};

const useGetFeeds = (): UseQueryResult<feedList[]> => {
  return useQuery([FEED_API_KEY.FEEDS], () => getFeeds(), { suspense: true });
};

export default useGetFeeds;
