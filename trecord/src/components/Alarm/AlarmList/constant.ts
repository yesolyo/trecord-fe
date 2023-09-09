export const alarmStatusKeys = {
  COMMENT: 'message',
  RECORD_LIKE: 'heart',
} as const;

export type AlarmStatusUnion =
  (typeof alarmStatusKeys)[keyof typeof alarmStatusKeys];
