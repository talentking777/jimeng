import axios from 'axios';

import ImageGenerationApi from './image-generation';

const BASE_PATH = process.env.REACT_APP_JIMENG_API_URL;

const globalAxios = axios.create({
  baseURL: BASE_PATH,
});

const api = {
  ImageGenerationApi: new ImageGenerationApi(globalAxios),
};

export default api;
