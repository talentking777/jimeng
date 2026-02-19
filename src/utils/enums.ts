import { ReactComponent as ImageGenerationImg } from 'assets/icon4.svg';
import { ReactComponent as VideoGenerationImg } from 'assets/video-generation.svg';
import type { FC, ReactNode, SVGProps } from 'react';
import { createElement } from 'react';

export enum OBJECT_GENERATE_TYPE {
  IMAGE_GENERATION = 'IMAGE_GENERATION',
  VIDEO_GENERATION = 'VIDEO_GENERATION',
}

export const OBJECT_GENERATE_TYPE_VALUE: Record<OBJECT_GENERATE_TYPE, { label: string; icon: FC<SVGProps<SVGSVGElement>> }> = {
  [OBJECT_GENERATE_TYPE.IMAGE_GENERATION]: {
    label: '图片生成',
    icon: ImageGenerationImg,
  },
  [OBJECT_GENERATE_TYPE.VIDEO_GENERATION]: {
    label: '视频生成',
    icon: VideoGenerationImg,
  },
};

export function getGenerateTypeIconNode(type: OBJECT_GENERATE_TYPE): ReactNode {
  const Icon = OBJECT_GENERATE_TYPE_VALUE[type].icon;
  return Icon ? createElement(Icon) : null;
}
