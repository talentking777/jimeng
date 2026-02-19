import { AxiosInstance } from 'axios';

import { RequestArgs } from './base';

export const createRequestFunction = (axiosArgs: RequestArgs, globalAxios: AxiosInstance) => {
  const axiosRequestArgs = { ...axiosArgs.options, url: axiosArgs.url };
  return globalAxios.request(axiosRequestArgs);
};
