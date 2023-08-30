import { feedDetailProps } from '@/types';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { http } from '../_http';
import FEED_API_KEY from './constants';

interface Props {
  id: string;
}

const getFeedDetail = async ({ id }: Props): Promise<feedDetailProps> => {
  const url = `/api/v1/feeds/${id}`;
  const response: feedDetailProps = await http.get(url);

  return response;
};

const useGetFeedDetail = ({ id }: Props): UseQueryResult<feedDetailProps> => {
  return useQuery(
    [FEED_API_KEY.FEED_DETAIL, { feed_id: id }],
    () => getFeedDetail({ id }),
    {
      suspense: true,
    },
  );
};

export default useGetFeedDetail;
