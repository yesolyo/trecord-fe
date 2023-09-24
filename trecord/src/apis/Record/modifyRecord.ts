import { useMutation, useQueryClient } from '@tanstack/react-query';

import { http } from '../_http';
import RECORD_API_KEY from './constants';

interface Props {
  imageUrl?: string;
  recordId: string;
  title: string;
  date: string;
  place: string;
  latitude: string;
  longitude: string;
  feeling: string;
  weather: string;
  transportation: string;
  content: string;
  companion: string;
}

const modifyRecord = async ({
  imageUrl,
  recordId,
  title,
  date,
  place,
  latitude,
  longitude,
  feeling,
  weather,
  transportation,
  content,
  companion,
}: Props) => {
  const url = `/api/v1/records/${recordId}`;
  const response = await http.put(url, {
    imageUrl,
    title,
    date,
    place,
    latitude,
    longitude,
    feeling,
    weather,
    transportation,
    content,
    companion,
  });

  return response;
};

const useModifyRecord = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();
  return useMutation(modifyRecord, {
    onSuccess: () => {
      queryClient.invalidateQueries([RECORD_API_KEY.RECORD, { feed_id: id }]);
    },
    /** @TODO 나중에 error boundary 추가 */
    onError: (e) => console.log(e),
  });
};

export default useModifyRecord;
