import { useMutation, useQueryClient } from '@tanstack/react-query';

import { http } from '../_http';
import FEED_API_KEY from './constants';
import { NewFeedProps } from '@/types/feeds';

const newFeed = async ({
  name,
  satisfaction,
  place,
  latitude,
  longitude,
  startAt,
  endAt,
  description,
  imageUrl,
  contributors,
}: NewFeedProps) => {
  const url = `/api/v1/feeds`;
  const response = await http.post(url, {
    name,
    satisfaction,
    place,
    latitude,
    longitude,
    startAt,
    endAt,
    description,
    imageUrl,
    contributors,
  });

  return response;
};

const useNewFeed = () => {
  const queryClient = useQueryClient();
  return useMutation(newFeed, {
    onSuccess: () => {
      queryClient.invalidateQueries([FEED_API_KEY.FEEDS]);
    },
    /** @TODO 나중에 error boundary 추가 */
    onError: (e) => console.log(e),
  });
};

export default useNewFeed;
