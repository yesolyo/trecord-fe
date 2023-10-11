import { useMutation, useQueryClient } from '@tanstack/react-query';

import { http } from '../_http';
import FEED_API_KEY from '../Feed/constants';

interface Props {
  feedId: number;
}

const gtfOutFromInviteFeed = async ({ feedId }: Props) => {
  const url = `/api/v1/feeds/${feedId}/contributors/leave`;
  const response = await http.delete(url);

  return response;
};

const useGtfOutFromInviteFeed = () => {
  const queryClient = useQueryClient();

  return useMutation(gtfOutFromInviteFeed, {
    onSuccess: () => {
      queryClient.invalidateQueries([FEED_API_KEY.FEED_DETAIL]);
    },
    /** @TODO 나중에 error boundary 추가 */
    onError: (e) => console.log(e),
  });
};

export default useGtfOutFromInviteFeed;
