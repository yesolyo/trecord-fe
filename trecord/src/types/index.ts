import icons from '@/assets/index';
export type tabBarList =
  '"alarm" | "book" | "user" | "noneCharacter" | "profile" | "trecordLogo" | "welcomeCharacter"';
export type feedList = {
  id: number;
  name: string;
  imageUrl: string;
  place: string;
  startAt: string;
  endAt: string;
};

export type feedDetailProps = {
  writerId: number;
  feedId: number;
  name: string;
  imageUrl: string;
  description: string;
  companion: string;
  place: string;
  satisfaction: keyof typeof icons;
  startAt: string;
  endAt: string;
  records: recordList[];
};

export type recordList = {
  id: number;
  title: string;
  date: string;
};

export type recordDetailList = {
  comments: commentList[];
  companion: string;
  content: string;
  date: string;
  feedId: number;
  feeling: string;
  isUpdatable: boolean;
  place: string;
  recordId: number;
  title: string;
  transportation: keyof typeof icons;
  weather: keyof typeof icons;
  writerId: number;
};

export type commentList = {
  commentId: number;
  commenterId: number;
  isUpdatable: boolean;
  content: string;
};
