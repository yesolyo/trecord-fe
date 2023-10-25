import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { http } from '../_http';

import COMMENT_API_KEY from './constants';
import { Page } from '@/types';
import { GetMypageComment } from '@/types/mypage';
interface Props {
  pageCount: number;
}
export const getMypageComment = async ({
  pageCount,
}: Props): Promise<Page<GetMypageComment>> => {
  const url = `/api/v1/users/comments?page=0&size=${pageCount}`;
  const response: Page<GetMypageComment> = await http.authGet(url);
  return response;
};

const useGetMypageComment = ({
  pageCount,
}: Props): UseQueryResult<Page<GetMypageComment>> => {
  return useQuery(
    [COMMENT_API_KEY.MYPAGE_COMMENT, { pageCount }],
    () => getMypageComment({ pageCount }),
    {
      suspense: true,
    },
  );
};

export default useGetMypageComment;
