import { useMutation, useQueryClient } from '@tanstack/react-query';

import { http } from '../_http';
import RECORD_API_KEY from './constants';

interface Props {
  recordId: string;
}

const deleteRecord = async ({ recordId }: Props) => {
  const url = `/api/v1/records/${recordId}`;
  const response = await http.delete(url);

  return response;
};

const useRecordDeleteMutation = ({ recordId }: Pick<Props, 'recordId'>) => {
  const queryClient = useQueryClient();

  return useMutation(deleteRecord, {
    onSuccess: () => {
      queryClient.invalidateQueries([
        RECORD_API_KEY.RECORD,
        { record_id: recordId },
      ]);
    },
    /** @TODO 나중에 error boundary 추가 */
    onError: (e) => console.log(e),
  });
};

export default useRecordDeleteMutation;
