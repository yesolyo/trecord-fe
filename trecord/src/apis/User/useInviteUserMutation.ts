import { useMutation, useQueryClient } from '@tanstack/react-query';

import { http } from '../_http';
import FEED_API_KEY from '../Feed/constants';

interface Props {
  feedId: string;
  userToId: number;
}

const inviteUser = async ({ feedId, userToId }: Props) => {
  const url = `/api/v1/feeds/${feedId}/contributors/invite`;
  const response = await http.post(url, {
    userToId,
  });

  return response;
};

const useInviteUserMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(inviteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries([FEED_API_KEY.FEED_DETAIL]);
    },
    /** @TODO 나중에 error boundary 추가 */
    onError: (e) => console.log(e),
  });
};

export default useInviteUserMutation;
