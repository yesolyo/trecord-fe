import icons from '@/assets/index';

const SELECT_TYPES = ['MODIFY', 'DELETE', 'SHARE'] as const;
export type SelectType = (typeof SELECT_TYPES)[number];
export const SELECT_INFOS: {
  label: string;
  value: SelectType;
}[] = [
  {
    label: '수정하기',
    value: 'MODIFY',
  },
  {
    label: '삭제하기',
    value: 'DELETE',
  },
  {
    label: '공유하기',
    value: 'SHARE',
  },
];

export type tabBarList =
  '"alarm" | "book" | "user" | "noneCharacter" | "profile" | "trecordLogo" | "welcomeCharacter"';

export type recordListProps = {
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  size: number;
  number: number;
  numberOfElements: number;
  empty: boolean;
  content: recordList[];
};

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

export type commentList = {
  commentId: number;
  commenterId: number;
  isUpdatable: boolean;
  content: string;
};

export interface Page<T> {
  first: boolean;
  last: boolean;
  size: number;
  number: number;
  numberOfElements: number;
  totalPages: number;
  totalElements: number;
  empty: boolean;
  content: T[];
}
