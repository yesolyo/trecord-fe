/* eslint-disable @typescript-eslint/no-explicit-any */
import { TrecordResponse } from '@/types/http';
import Axios, { AxiosRequestConfig } from 'axios';

class Http {
  readonly axios;

  constructor() {
    this.axios = Axios.create({
      baseURL: `${import.meta.env.VITE_BASE_URL}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('acessToken'),
      },
    });
  }

  async post<Request = any, Response = unknown>(
    url: string,
    data?: Request,
    conf: AxiosRequestConfig = {},
  ) {
    return this.axios
      .post<TrecordResponse<Response>>(url, data, {
        ...conf,
      })
      .then((res) => res.data.data);
  }

  async get<Response = unknown>(url: string, conf: AxiosRequestConfig = {}) {
    return this.axios
      .get<TrecordResponse<Response>>(url, {
        ...conf,
      })
      .then((res) => res.data.data);
  }
}

export const http = new Http();
