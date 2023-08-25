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
