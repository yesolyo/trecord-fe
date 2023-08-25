import { useMutation } from '@tanstack/react-query';

import { http } from '../_http';

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

/** @TODO 나중에 get도 수정되면 그 때 invaliation 과정 추가 */
const useDeleteFeed = () => {
  return useMutation(deleteFeed, {
    /** @TODO 나중에 error boundary 추가 */
    onError: (e) => console.log(e),
  });
};

export default useDeleteFeed;
