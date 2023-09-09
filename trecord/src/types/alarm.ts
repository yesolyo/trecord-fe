export interface GetAlarmResponse {
  notifications: GetAlarm[];
}

export interface GetAlarm {
  type: string;
  status: string;
  recordId: number;
  commentId: number;
  senderId: number;
  senderNickname: string;
  content: string;
  date: string;
}
