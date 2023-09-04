import { GetMypageCommentResponse } from '@/types/comment';
import { http } from '../_http';

export const getMypageComment = async (): Promise<GetMypageCommentResponse> => {
  const url = `/api/v1/users/comments`;
  const response: GetMypageCommentResponse = await http.authGet(url);
  return response;
};
