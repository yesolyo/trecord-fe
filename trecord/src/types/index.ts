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
