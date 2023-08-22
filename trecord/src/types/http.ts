export interface TrecordResponse<T = unknown> {
  code: number;
  message: string;
  data: T;
}
