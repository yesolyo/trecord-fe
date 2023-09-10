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
      },
    });
  }

  /**
   * 토큰이 있는 경우에만 헤더에 Authorization을 보냅니다.
   */
  async get<Response = unknown>(url: string, conf: AxiosRequestConfig = {}) {
    return this.axios
      .get<TrecordResponse<Response>>(url, {
        ...conf,
        ...(localStorage.getItem('acessToken') && {
          headers: {
            Authorization: localStorage.getItem('acessToken'),
          },
        }),
      })
      .then((res) => res.data.data);
  }

  async authGet<Response = unknown>(
    url: string,
    conf: AxiosRequestConfig = {},
  ) {
    return this.axios
      .get<TrecordResponse<Response>>(url, {
        ...conf,
        headers: {
          Authorization: localStorage.getItem('acessToken'),
        },
      })
      .then((res) => res.data.data);
  }

  async post<Request = any, Response = unknown>(
    url: string,
    data?: Request,
    conf: AxiosRequestConfig = {},
  ) {
    return this.axios
      .post<TrecordResponse<Response>>(url, data, {
        ...conf,
        headers: {
          Authorization: localStorage.getItem('acessToken'),
        },
      })
      .then((res) => res.data.data);
  }

  async put<Request = any, Response = unknown>(
    url: string,
    data?: Request,
    conf: AxiosRequestConfig = {},
  ) {
    return this.axios
      .put<TrecordResponse<Response>>(url, data, {
        ...conf,
        headers: {
          Authorization: localStorage.getItem('acessToken'),
        },
      })
      .then((res) => res.data.data);
  }

  async delete<Request = any, Response = unknown>(
    url: string,
    data?: Request,
    conf: AxiosRequestConfig = {},
  ) {
    return this.axios
      .delete<TrecordResponse<Response>>(url, {
        ...conf,
        headers: {
          Authorization: localStorage.getItem('acessToken'),
        },
        data,
      })
      .then((res) => res.data.data);
  }
}

export const http = new Http();
