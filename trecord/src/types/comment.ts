export interface PostNewCommentResponse {
  recordId: number;
  content: string;
}

export interface GetNewCommentResponse {
  comments: GetCommentProps[];
}
export interface GetCommentProps {
  commentId: number;
  commenterId: number;
  commenterImageUrl: string;
  isUpdatable: boolean;
  content: string;
  commentCreatedDate: string;
  commenterNickname: string;
}

export interface PutNewCommentResponse {
  commentId: number;
  content: string;
}
export interface DeleteNewCommentResponse {
  commentId: number;
}
