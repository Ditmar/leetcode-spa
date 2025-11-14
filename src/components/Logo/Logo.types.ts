import type { ImgHTMLAttributes } from 'react';

export interface LogoProps extends ImgHTMLAttributes<HTMLImageElement> {
  orientation?: 'vertical' | 'horizontal';
  width?: number | string;
  height?: number | string;
  alt?: string;
  className?: string;
}
