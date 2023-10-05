import icons from '@/assets/index';
import { User } from './user';

export interface Feed {
  id: number;
  name: string;
  imageUrl: string;
  place: string;
  latitude: string;
  longitude: string;
  startAt: string;
  endAt: string;
}

export interface NewFeedProps {
  name: string;
  satisfaction?: string;
  place?: string;
  latitude?: string;
  longitude?: string;
  startAt: string;
  endAt: string;
  description?: string;
  imageUrl?: string;
  contributors: number[];
}

export interface FeedDetail {
  writerId: number;
  feedId: number;
  canModifyFeed: boolean;
  canWriteRecord: boolean;
  name: string;
  imageUrl: string;
  description: string;
  place: string;
  latitude: string;
  longitude: string;
  satisfaction: keyof typeof icons;
  startAt: string;
  endAt: string;
  contributors: User[];
}
