const SELECT_FEED_DETAIL_TYPES = ['MODIFY', 'DELETE', 'SHARE'] as const;
export type SelectFeedDetailType = (typeof SELECT_FEED_DETAIL_TYPES)[number];
export const SELECT_FEED_DETAIL_INFOS: {
  label: string;
  value: SelectFeedDetailType;
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

const SELECT_RECORD_DETAIL_TYPES = ['MODIFY', 'DELETE'] as const;
export type SelectRecordDetailType =
  (typeof SELECT_RECORD_DETAIL_TYPES)[number];
export const SELECT_RECRORD_DETAIL_INFOS: {
  label: string;
  value: SelectRecordDetailType;
}[] = [
  {
    label: '수정하기',
    value: 'MODIFY',
  },
  {
    label: '삭제하기',
    value: 'DELETE',
  },
];

const SELECT_MY_COMMENT_TYPES = ['MODIFY', 'DELETE', 'REPLY'] as const;
export type SelectMyCommentType = (typeof SELECT_MY_COMMENT_TYPES)[number];
export const SELECT_MY_COMMENT_INFOS: {
  label: string;
  value: SelectMyCommentType;
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
    label: '답글달기',
    value: 'REPLY',
  },
];

const SELECT_REPLY_COMMENT_TYPES = ['MODIFY', 'DELETE'] as const;
export type SelectReplyCommentType =
  (typeof SELECT_REPLY_COMMENT_TYPES)[number];
export const SELECT_REPLY_COMMENT_INFOS: {
  label: string;
  value: SelectReplyCommentType;
}[] = [
  {
    label: '수정하기',
    value: 'MODIFY',
  },
  {
    label: '삭제하기',
    value: 'DELETE',
  },
];

const SELECT_COMMENT_TYPES = ['REPLY'] as const;
export type SelectCommentType = (typeof SELECT_COMMENT_TYPES)[number];
export const SELECT_COMMENT_INFOS: {
  label: string;
  value: SelectCommentType;
}[] = [
  {
    label: '답글달기',
    value: 'REPLY',
  },
];

const SELECT_FEEL_TYPES = ['happy', 'flutter', 'sad', 'angry'] as const;
export type SelectFeelType = (typeof SELECT_FEEL_TYPES)[number];
export const SELECT_FEEL_INFOS: {
  label: string;
  value: SelectFeelType;
}[] = [
  {
    label: '행복해요',
    value: 'happy',
  },
  {
    label: '설레요',
    value: 'flutter',
  },
  {
    label: '슬퍼요',
    value: 'sad',
  },
  {
    label: '화나요',
    value: 'angry',
  },
];

const SELECT_SATISFACTION_TYPES = [
  'emojiSad',
  'emojiNormal',
  'emojiHappy',
] as const;
export type SelectEmojiType = (typeof SELECT_SATISFACTION_TYPES)[number];
export const SELECT_SATISFACTION_INFOS: {
  label: string;
  value: SelectEmojiType;
}[] = [
  {
    label: '불만족ㅠ',
    value: 'emojiSad',
  },
  {
    label: '보통이에요',
    value: 'emojiNormal',
  },
  {
    label: '만족해요!',
    value: 'emojiHappy',
  },
];

export const SELECT_MOVE_TYPES = [
  'car',
  'bus',
  'ship',
  'airplane',
  'bicycle',
  'walk',
  'train',
] as const;
export type SelectMoveType = (typeof SELECT_MOVE_TYPES)[number];
export const SELECT_MOVE_INFOS: SelectMoveType[] = [
  'car',
  'bus',
  'ship',
  'airplane',
  'bicycle',
  'walk',
  'train',
];

export const SELECT_WEATHER_TYPES = [
  'sun',
  'cloudSunny',
  'cloud',
  'cloudDrizzle',
  'flash',
  'wind',
  'snow',
] as const;
export type SelectWeatherType = (typeof SELECT_WEATHER_TYPES)[number];
export const SELECT_WEATHER_INFOS: SelectWeatherType[] = [
  'sun',
  'cloudSunny',
  'cloud',
  'cloudDrizzle',
  'flash',
  'wind',
  'snow',
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
