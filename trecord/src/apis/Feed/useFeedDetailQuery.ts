import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { http } from '../_http';
import FEED_API_KEY from './constants';
import { FeedDetail } from '@/types/feeds';

interface Props {
  id: string;
}

const getFeedDetail = async ({ id }: Props): Promise<FeedDetail> => {
  const url = `/api/v1/feeds/${id}`;
  const response: FeedDetail = await http.get(url);

  return response;
};

const useFeedDetailQuery = ({ id }: Props): UseQueryResult<FeedDetail> => {
  return useQuery(
    [FEED_API_KEY.FEED_DETAIL, { feed_id: id }],
    () => getFeedDetail({ id }),
    {
      suspense: true,
    },
  );
};

export default useFeedDetailQuery;
