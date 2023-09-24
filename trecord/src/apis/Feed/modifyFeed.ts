import { useMutation, useQueryClient } from '@tanstack/react-query';

import { http } from '../_http';
import FEED_API_KEY from './constants';

interface Props {
  id: string;
  name: string;
  satisfaction?: string;
  place?: string;
  latitude?: string;
  longitude?: string;
  startAt?: string;
  endAt?: string;
  companion?: string;
  description?: string;
  imageUrl?: string;
}

const modifyFeed = async ({
  id,
  name,
  satisfaction,
  place,
  latitude,
  longitude,
  startAt,
  endAt,
  companion,
  description,
  imageUrl,
}: Props) => {
  const url = `/api/v1/feeds/${id}`;
  const response = await http.put(url, {
    name,
    satisfaction,
    place,
    latitude,
    longitude,
    startAt,
    endAt,
    companion,
    description,
    imageUrl,
  });

  return response;
};

const useModifyFeed = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();
  return useMutation(modifyFeed, {
    onSuccess: () => {
      queryClient.invalidateQueries([
        FEED_API_KEY.FEED_DETAIL,
        { feed_id: id },
      ]);
    },
    /** @TODO 나중에 error boundary 추가 */
    onError: (e) => console.log(e),
  });
};

export default useModifyFeed;
