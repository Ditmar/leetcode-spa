export const clampIndex = (index: number, length: number) => {
  if (index < 0) return length - 1;
  if (index >= length) return 0;
  return index;
};