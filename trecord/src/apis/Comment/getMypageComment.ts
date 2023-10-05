import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { http } from '../_http';
import { GetMypageCommentResponse } from '@/types/comment';
import COMMENT_API_KEY from './constants';
export const getMypageComment = async (): Promise<GetMypageCommentResponse> => {
  const url = `/api/v1/users/comments`;
  const response: GetMypageCommentResponse = await http.authGet(url);
  return response;
};

const useGetMypageComment = (): UseQueryResult<GetMypageCommentResponse> => {
  return useQuery([COMMENT_API_KEY.MYPAGE_COMMENT], () => getMypageComment(), {
    suspense: true,
  });
};

export default useGetMypageComment;
