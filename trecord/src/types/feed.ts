const FEED_SELECT_TYPES = ['MODIFY', 'DELETE', 'SHARE'] as const;
export type FeedSelectType = (typeof FEED_SELECT_TYPES)[number];
export const FEED_SELECT_INFOS: {
  label: string;
  value: FeedSelectType;
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
