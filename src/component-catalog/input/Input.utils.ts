export function getCharacterCount(value?: string | number | readonly string[]) {
  if (typeof value === 'string') return value.length;
  if (typeof value === 'number') return String(value).length;
  if (Array.isArray(value)) return value.join('').length;

  return 0;
}
