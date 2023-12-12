import { useMutation, useQueryClient } from '@tanstack/react-query';
import { http } from '../_http';
import { DeleteNewCommentResponse } from '@/types/comment';
import MYPAGE_API_KEY from '../MyPage/constants';

interface deleteNewCommentProps {
  commentId: number;
}

const deleteNewComment = async ({
  commentId,
}: deleteNewCommentProps): Promise<deleteNewCommentProps> => {
  const url = `/api/v1/comments/${commentId}`;
  const response: DeleteNewCommentResponse = await http.delete(url);

  return response;
};

const useCommentListDeleteMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteNewComment, {
    onSuccess: () => {
      queryClient.invalidateQueries([MYPAGE_API_KEY.COMMENT]);
    },

    /** @TODO 나중에 error boundary 추가 */
    onError: (e) => console.log(e),
  });
};

export default useCommentListDeleteMutation;
