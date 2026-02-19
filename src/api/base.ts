import type { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface RequestArgs {
  url: string;
  options: AxiosRequestConfig;
}

export class BaseApi {
  protected axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }
}
