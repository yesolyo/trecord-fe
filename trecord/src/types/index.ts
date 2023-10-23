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

export const ALARM_STATUS_KEY = {
  COMMENT: 'message',
  RECORD_LIKE: 'heart',
  FEED_INVITATION: 'invite',
} as const;

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
