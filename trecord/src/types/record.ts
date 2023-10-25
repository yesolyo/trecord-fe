import icons from '@/assets/index';
import { commentList } from './comment';

export interface PostNewRecordResponse {
  content: string;
  date: string;
  feedId: number;
  feeling: string;
  imageUrl: string;
  place: string;
  recordId: number;
  title: string;
  transportation: string;
  weather: string;
  writerId: number;
}

export type recordList = {
  id: number;
  dayNumber: number;
  title: string;
  place: string;
  date: string;
  imageUrl?: string;
  latitude: string;
  longitude: string;
};

export type recordDetailList = {
  imageUrl: null | string;
  comments: commentList[];
  companion: string;
  content: string;
  date: string;
  feedId: number;
  feeling: string;
  canModifyRecord: boolean;
  place: string;
  latitude: string;
  longitude: string;
  recordId: number;
  liked: boolean;
  title: string;
  transportation: keyof typeof icons;
  weather: keyof typeof icons;
  writerId: number;
};
