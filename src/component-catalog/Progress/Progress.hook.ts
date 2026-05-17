import { normalizeValue } from './Progress.utils';

export const useProgress = (value?: number) => {
  const normalized = normalizeValue(value);

  return {
    normalized,
    ariaValueNow: normalized,
  };
};
