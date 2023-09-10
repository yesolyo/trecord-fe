export interface GetAllAlarmResponse {
  notifications: (GetCommentAlarm | GetLikeAlarm | GetInvitationAlarm)[];
}

export interface GetCommentAlarmResponse {
  notifications: GetCommentAlarm[];
}

export interface GetLikeAlarmResponse {
  notifications: GetLikeAlarm[];
}

export interface GetAllAlarm {
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
    id: 1;
    title: string;
  };
  comment: {
    id: number;
    parentId: string;
    content: string;
  };
  date: string;
}

export interface GetCommentAlarm {
  type: string;
  status: string;
  content: string;
  userFrom: {
    id: number;
    nickname: string;
  };
  record: {
    id: 1;
    title: string;
  };
  comment: {
    id: number;
    parentId: string;
    content: string;
  };
  date: string;
}
export interface GetLikeAlarm {
  type: string;
  status: string;
  content: string;
  userFrom: {
    id: number;
    nickname: string;
  };
  record: {
    id: 1;
    title: string;
  };
  date: string;
}
export interface GetInvitationAlarm {
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
  date: string;
}
