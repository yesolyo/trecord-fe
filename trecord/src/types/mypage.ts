export interface GetInviteFeedList {
  feedId: number;
  feedName: string;
  imageUrl: string | null;
  ownerNickname: string;
}
export interface GetMyPageLike {
  recordId: number;
  title: string;
  imageUrl: string | null;
  authorId: number;
  authorNickname: string;
}

export interface GetMypageComment {
  recordId: number;
  recordTitle: string;
  commentId: number;
  content: string;
  commentCreatedDateTime: string;
}

export interface ProfileFileProps {
  imgFile: string;
  originFile: File | Blob | string;
}
