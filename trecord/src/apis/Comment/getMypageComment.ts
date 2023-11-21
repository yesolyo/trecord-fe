import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { http } from '../_http';

import COMMENT_API_KEY from './constants';
import { Page } from '@/types';
import { GetMypageComment } from '@/types/mypage';
interface Props {
  page: number;
}
export const getMypageComment = async ({
  page,
}: Props): Promise<Page<GetMypageComment>> => {
  const url = `/api/v1/users/comments?page=${page}&size=5`;
  const response: Page<GetMypageComment> = await http.authGet(url);
  return response;
};

const useGetMypageComment = ({
  page,
}: Props): UseQueryResult<Page<GetMypageComment>> => {
  return useQuery(
    [COMMENT_API_KEY.MYPAGE_COMMENT],
    () => getMypageComment({ page }),
    {
      suspense: true,
    },
  );
};

export default useGetMypageComment;
