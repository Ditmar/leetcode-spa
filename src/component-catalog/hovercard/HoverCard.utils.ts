import type { Options as PopperOptions } from '@popperjs/core';

/**
 * @param padding
 * @param offset
 */
export const buildPopperModifiers = (
  padding: number,
  offset: [number, number] = [0, 8]
): PopperOptions['modifiers'] => [
  {
    name: 'preventOverflow',
    options: {
      padding,
      boundary: 'viewport',
    },
  },
  {
    name: 'flip',
    options: {
      padding,
      fallbackPlacements: ['top-start', 'bottom-end', 'top-end'],
    },
  },
  {
    name: 'offset',
    options: { offset },
  },
];
