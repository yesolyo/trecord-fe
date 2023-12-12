import { useMutation, useQueryClient } from '@tanstack/react-query';
import { http } from '../_http';
import COMMENT_API_KEY from './constants';

export interface postReplyCommentProps {
  recordId: number;
  parentId: number;
  content: string;
}
const postReplyComment = async ({
  recordId,
  parentId,
  content,
}: postReplyCommentProps): Promise<postReplyCommentProps> => {
  const url = `/api/v1/comments`;
  const response: postReplyCommentProps = await http.post(url, {
    recordId,
    parentId,
    content,
  });

  return response;
};

const useReplyCommentMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(postReplyComment, {
    onSuccess: () => {
      queryClient.invalidateQueries([COMMENT_API_KEY.NEW_COMMENT]);
      queryClient.invalidateQueries([COMMENT_API_KEY.REPLY_COMMENT]);
    },
    /** @TODO 나중에 error boundary 추가 */
    onError: (e) => console.log(e),
  });
};

export default useReplyCommentMutation;
