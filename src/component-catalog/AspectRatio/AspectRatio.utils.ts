import type { AspectRatioValue } from './AspectRatio.types';

export const parseRatio = (ratio?: AspectRatioValue): number => {
  if (ratio == null) return 1;

  if (typeof ratio === 'number') return ratio;

  const delimiter = ratio.includes('/') ? '/' : ':';
  const [w, h] = ratio.split(delimiter).map(Number);

  if (Number.isNaN(w) || Number.isNaN(h) || h === 0) {
    return 1;
  }

  return w / h;
};
