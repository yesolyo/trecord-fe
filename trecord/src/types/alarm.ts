<<<<<<< HEAD
export interface GetAlarm {
=======
export interface GetAlarmResponse {
  content: (GetCommentAlarm & GetLikeAlarm & GetInvitationAlarm)[];
}

export interface GetAllAlarm {
>>>>>>> 38f2edd ([FE] 알람 필터 바 개선 (#7))
  id: number;
  type: string;
  status: string;
  content: string;
  userFrom: {
    id: number;
    nickname: string;
  };
  feed: {
    id: number;
    name: string;
  };
  record: {
    id: number;
    title: string;
  };
  comment: {
    id: number;
    parentId: string;
    content: string;
  };
  date: string;
}
