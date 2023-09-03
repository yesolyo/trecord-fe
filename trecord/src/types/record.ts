/** @TODO feeling type화, transportation 타입화 */
export interface PostNewRecordResponse {
  companion: string;
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
