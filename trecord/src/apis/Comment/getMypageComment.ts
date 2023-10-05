import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { http } from '../_http';
import { GetMypageCommentResponse } from '@/types/comment';
import COMMENT_API_KEY from './constants';
interface Props {
  pageCount: number;
}
export const getMypageComment = async ({
  pageCount,
}: Props): Promise<GetMypageCommentResponse> => {
  const url = `/api/v1/users/comments?page=0&size=${pageCount}`;
  const response: GetMypageCommentResponse = await http.authGet(url);
  return response;
};

const useGetMypageComment = ({
  pageCount,
}: Props): UseQueryResult<GetMypageCommentResponse> => {
  return useQuery(
    [COMMENT_API_KEY.MYPAGE_COMMENT, { pageCount }],
    () => getMypageComment({ pageCount }),
    {
      suspense: true,
    },
  );
};

export default useGetMypageComment;
