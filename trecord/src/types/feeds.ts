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
