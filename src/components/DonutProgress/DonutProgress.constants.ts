import {
  DONUT_PROGRESS_COLORS,
  DONUT_PROGRESS_TYPOGRAPHY,
  DONUT_PROGRESS_TRACK_COLOR,
} from '../../style-library/types/theme.helpers';
export const DEFAULT_SIZE = 38 as const;
export const DEFAULT_STROKE_WIDTH = 6 as const;
export const AUTO_COLORS = DONUT_PROGRESS_COLORS;
export const TYPOGRAPHY = DONUT_PROGRESS_TYPOGRAPHY;
export const TRACK_COLOR = DONUT_PROGRESS_TRACK_COLOR;
export const PERCENTAGE_THRESHOLDS = {
  low: 50,
  medium: 75,
} as const;
