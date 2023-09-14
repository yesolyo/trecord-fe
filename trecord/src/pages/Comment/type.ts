import { postReplyCommentProps } from '@/apis/Comment/postReplyComment';
import {
  CommentUserModalProps,
  GetCommentProps,
  postNewCommentProps,
  putDataProps,
} from '@/types/comment';
import { deletDataProps } from '@components/Comment/CommentModal';

export interface commentProps {
  comment: GetCommentProps[];
  newComment: string;
  isEdit: boolean;
  isReplyEdit: boolean;
  isDelete: boolean;
  commentId: number;
  isUserProfile: boolean;
  userProfileData: CommentUserModalProps;
  onDeleteData: ({ id }: deletDataProps) => void;
  onPostNewData: ({ id, content }: postNewCommentProps) => void;
  onPostReplyData: ({
    recordId,
    parentId,
    content,
  }: postReplyCommentProps) => void;
  onPutData: ({ id, content }: putDataProps) => void;
  onCloseEidt: () => void;
  onReplyEdit: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onNavigate: () => void;
  onSelectUserProfile: () => void;
  onUserProfileData: ({
    imgUrl,
    nickName,
    content,
  }: CommentUserModalProps) => void;
  onCommentId: (id: number) => void;
  onNewComment: (content: string) => void;
}
