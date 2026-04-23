import { CARD_OFFSET } from './HoverCard.constants';

import type { Options as PopperOptions } from '@popperjs/core';

/**
 * @param padding
 * @param offset
 */
export const buildPopperModifiers = (
  padding: number,
  offset: [number, number] = [0, CARD_OFFSET]
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
