import { useMutation } from '@tanstack/react-query';

import { http } from '../_http';

interface Props {
    imageUrl?: string;
    feedId: string;
    title: string;
    date: string;
    place: string;
    feeling: string;
    weather: string;
    transportation: string;
    content: string;
    companion: string;         
}

const postNewRecord = async ({ 
    imageUrl = undefined,
    feedId,
    title,
    date,
    place,
    feeling,
    weather,
    transportation,
    content,
    companion,   
 }: Props) => {
  const url = `/api/v1/records`;
    const response = await http.post(url, {
      imageUrl,
      feedId,
      title,
      date,
      place,
      feeling,
      weather,
      transportation,
      content,
      companion,
    });

    console.log(response);

  return response;
};

/** @TODO 나중에 get도 수정되면 그 때 invaliation 과정 추가 */
const usePostNewRecord = () => {
    return useMutation(postNewRecord, {
        /** @TODO 나중에 error boundary 추가 */
      onError: (e) => console.log(e), 
  });
};

export default usePostNewRecord;
