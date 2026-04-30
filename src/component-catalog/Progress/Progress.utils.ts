export const normalizeValue = (value?: number): number => {
  if (value === undefined) return 0;
  return Math.min(100, Math.max(0, value));
};
