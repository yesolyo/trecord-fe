import { useMutation, useQueryClient } from '@tanstack/react-query';

import { http } from '../_http';
import RECORD_API_KEY from './constants';

interface Props {
  originalRecordId: number;
  targetRecordId: number;
}

const swapRecords = async ({ originalRecordId, targetRecordId }: Props) => {
  const url = `/api/v1/records/sequence/swap`;
  const response = await http.post(url, {
    originalRecordId,
    targetRecordId,
  });

  return response;
};

const useSwapRecords = ({ feedId }: { feedId: string }) => {
  const queryClient = useQueryClient();
  return useMutation(swapRecords, {
    onSuccess: () => {
      queryClient.invalidateQueries([
        RECORD_API_KEY.RECORD,
        { feed_id: feedId },
      ]);
    },
    /** @TODO 나중에 error boundary 추가 */
    onError: (e) => console.log(e),
  });
};

export default useSwapRecords;
