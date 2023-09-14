export interface PostNewCommentResponse {
  recordId: number;
  content: string;
}

export interface GetNewCommentResponse {
  comments: GetCommentProps[];
}
export interface GetMypageCommentResponse {
  commentData: React.Dispatch<React.SetStateAction<number>>;
  onClickModal: React.Dispatch<React.SetStateAction<boolean>>;
  comments: GetMypageComment[];
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
