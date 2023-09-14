import { useMutation } from '@tanstack/react-query';
import { http } from '../_http';

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

const usePostReplyComment = () => {
  return useMutation(postReplyComment, {
    /** @TODO 나중에 error boundary 추가 */
    onError: (e) => console.log(e),
  });
};

export default usePostReplyComment;
