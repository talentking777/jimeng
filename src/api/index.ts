import axios, { AxiosError } from 'axios';

import ImageGenerationApi from './image-generation';

const BASE_PATH = process.env.REACT_APP_JIMENG_API_URL;

const globalAxios = axios.create({
  baseURL: BASE_PATH,
});

globalAxios.interceptors.response.use(
  response => {
    return response.data;
  },
  (error: AxiosError) => {
    console.log(error);
    if (error.response?.status === 400) {
      // message.error(error.response?.data as string);
    } else {
      // message.error('SERVER ERROR');
    }
    return Promise.reject(error);
  },
);

const api = {
  ImageGenerationApi: new ImageGenerationApi(globalAxios),
};

export default api;
