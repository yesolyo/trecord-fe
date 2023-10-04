export interface PostNewCommentResponse {
  recordId: number;
  content: string;
}

export interface GetNewCommentResponse {
  content: GetCommentProps[];
  last: boolean;
}

export interface GetMyPageLikeRespose {
  content: GetMyPageLikeProps[];
}

export interface GetMyPageInviteResponse {
  content: GetMyPageInvteProps[];
}

export interface GetMyPageInviteListProps {
  content: GetMyPageInvteProps[];
  onDelete: (id: number) => void;
}
export interface GetMyPageInvteProps {
  feedId: number;
  feedName: string;
  imageUrl: string | null;
  ownerNickname: string;
}
export interface GetMyPageLikeProps {
  recordId: number;
  title: string;
  imageUrl: string | null;
  authorId: number;
  authorNickname: string;
}
export interface GetReplyCommentResponse {
  content: GetReplyCommentProps[];
}
export interface GetMypageCommentResponse {
  commentData: React.Dispatch<React.SetStateAction<number>>;
  onClickModal: React.Dispatch<React.SetStateAction<boolean>>;
  content: GetMypageComment[];
}

export interface GetReplyCommentProps {
  recordId: number;
  parentId: number;
  commentId: number;
  content: string;
  createdDateTime: string;
  isUpdatable: boolean;
  commenterNickname: string;
  commenterId: number;
  commenterImageUrl: string;
}

export interface GetMypageComment {
  recordId: number;
  recordTitle: string;
  commentId: number;
  content: string;
  commentCreatedDateTime: string;
}
export interface GetCommentProps {
  commentId: number;
  commenterId: number;
  commenterImageUrl: string;
  isUpdatable: boolean;
  content: string;
  commentCreatedDate: string;
  commenterNickname: string;
  replyCount: number;
}

export interface PutNewCommentResponse {
  commentId: number;
  content: string;
}
export interface DeleteNewCommentResponse {
  commentId: number;
}

export interface CommentUserModalProps {
  imgUrl: string;
  nickName: string;
  content: string;
}

export interface deletDataProps {
  id: number;
}
export interface postNewCommentProps {
  id: number;
  content: string;
}
export interface putDataProps {
  id: number;
  content: string;
}
