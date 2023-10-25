export interface GetAlarm {
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
