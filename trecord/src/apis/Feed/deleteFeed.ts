import { useMutation, useQueryClient } from '@tanstack/react-query';

import { http } from '../_http';
import FEED_API_KEY from './constants';

interface Props {
  id: string;
}

const deleteFeed = async ({ id }: Props) => {
  const url = `/api/v1/feeds`;
  const response = await http.delete(url, {
    id,
  });

  return response;
};

const useDeleteFeed = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteFeed, {
    onSuccess: () => {
      queryClient.invalidateQueries([FEED_API_KEY.FEEDS]);
    },
    /** @TODO 나중에 error boundary 추가 */
    onError: (e) => console.log(e),
  });
};

export default useDeleteFeed;
