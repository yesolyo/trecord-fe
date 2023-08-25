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

  async delete<Request = any, Response = unknown>(
    url: string,
    data?: Request,
    conf: AxiosRequestConfig = {},
  ) {
    return this.axios
      .delete<TrecordResponse<Response>>(url, { ...conf, data })
      .then((res) => res.data.data);
  }
}

export const http = new Http();
