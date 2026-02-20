import { AxiosPromise } from 'axios';

import { BaseApi, RequestArgs } from './base';
import { createRequestFunction } from './common';
import { ImageGenerationResponse } from './interface/image-generation';

export default class ImageGenerationApi extends BaseApi {
  generateImage(prompt: string): AxiosPromise<ImageGenerationResponse> {
    const localVarAxiosArgs: RequestArgs = {
      url: '/image-generation/create',
      options: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({
          prompt,
        }),
      },
    };

    return createRequestFunction(localVarAxiosArgs, this.axios);
  }
}
