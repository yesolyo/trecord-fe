export interface PostNewCommentResponse {
  recordId: number;
  content: string;
}

export interface GetReplyComment {
  recordId: number;
  parentId: number;
  commentId: number;
  content: string;
  createdDateTime: string;
  updatable: boolean;
  commenterNickname: string;
  commenterId: number;
  commenterImageUrl: string;
}
export interface GetComment {
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

export type commentList = {
  commentId: number;
  commenterId: number;
  isUpdatable: boolean;
  content: string;
};
