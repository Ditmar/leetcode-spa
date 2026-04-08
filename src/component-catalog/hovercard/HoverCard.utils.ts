import type { Options as PopperOptions } from "@popperjs/core";

/**
 * Builds the Popper.js modifiers array that clamps the card within the
 * visible viewport.
 *
 * @param padding - Minimum distance (px) between the card and each viewport
 *   edge, applied to both preventOverflow and flip modifiers.
 * @param offset - [skidding, distance] offset between the trigger and card.
 */
export const buildPopperModifiers = (
  padding: number,
  offset: [number, number] = [0, 8]
): PopperOptions["modifiers"] => [
  {
    name: "preventOverflow",
    options: {
      padding,
      boundary: "viewport",
    },
  },
  {
    name: "flip",
    options: {
      padding,
      fallbackPlacements: ["top-start", "bottom-end", "top-end"],
    },
  },
  {
    name: "offset",
    options: { offset },
  },
];