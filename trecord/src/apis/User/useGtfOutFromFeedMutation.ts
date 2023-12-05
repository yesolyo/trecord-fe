import { useMutation, useQueryClient } from '@tanstack/react-query';

import { http } from '../_http';
import FEED_API_KEY from '../Feed/constants';

interface Props {
  feedId: number;
  userId: number;
}

const gtfOutFromFeed = async ({ feedId, userId }: Props) => {
  const url = `/api/v1/feeds/${feedId}/contributors/${userId}`;
  const response = await http.delete(url);

  return response;
};

const useGtfOutFromFeedMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(gtfOutFromFeed, {
    onSuccess: () => {
      queryClient.invalidateQueries([FEED_API_KEY.FEED_DETAIL]);
    },
    /** @TODO 나중에 error boundary 추가 */
    onError: (e) => console.log(e),
  });
};

export default useGtfOutFromFeedMutation;
