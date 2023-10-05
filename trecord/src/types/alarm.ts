export interface GetAllAlarmResponse {
  content: (GetCommentAlarm & GetLikeAlarm & GetInvitationAlarm)[];
  last: boolean;
}

export interface GetCommentAlarmResponse {
  content: GetCommentAlarm[];
  last: boolean;
}

export interface GetLikeAlarmResponse {
  content: GetLikeAlarm[];
  last: boolean;
}
export interface GetInvitationAlarmResponse {
  content: GetInvitationAlarm[];
  last: boolean;
}
export interface GetAllAlarm {
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
  id: number;
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
  id: number;
  type: string;
  status: string;
  content: string;
  userFrom: {
    id: number;
    nickname: string;
  };
  record: {
    id: number;
    title: string;
  };
  date: string;
}
export interface GetInvitationAlarm {
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
  date: string;
}
