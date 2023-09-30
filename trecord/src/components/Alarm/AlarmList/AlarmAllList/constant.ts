export const alarmStatusKeys = {
  COMMENT: 'message',
  RECORD_LIKE: 'heart',
  FEED_INVITATION: 'invite',
} as const;

export type AlarmStatusUnion =
  (typeof alarmStatusKeys)[keyof typeof alarmStatusKeys];
