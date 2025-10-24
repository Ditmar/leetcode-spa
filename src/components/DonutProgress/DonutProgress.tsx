import { useTheme } from '@mui/material/styles';

import { DEFAULT_SIZE, DEFAULT_STROKE_WIDTH, TRACK_COLOR } from './DonutProgress.constants';
import { useDonutColor } from './DonutProgress.hook';
import { DonutContainer, DonutText } from './DonutProgress.styles';

import type { DonutProgressProps } from './DonutProgress.types';
import type { JSX } from 'react';

export const DonutProgress = ({
  percentage,
  color = 'auto',
  size = DEFAULT_SIZE,
  strokeWidth = DEFAULT_STROKE_WIDTH,
  animated = true,
}: DonutProgressProps): JSX.Element => {
  const theme = useTheme();
  const safePercentage = Math.max(0, Math.min(100, Number(percentage) || 0));
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (safePercentage / 100) * circumference;
  const computedColor = useDonutColor(color, safePercentage);
  const trackColor = theme.palette.mode === 'dark' ? TRACK_COLOR.dark : TRACK_COLOR.light;
  return (
    <DonutContainer
      size={size}
      role="progressbar"
      aria-valuenow={Math.round(safePercentage)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`Progress: ${Math.round(safePercentage)}%`}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        <circle
          stroke={trackColor}
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          stroke={computedColor}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeLinecap="round"
          style={{
            transition: animated ? 'stroke-dashoffset 0.8s ease' : 'none',
            transform: 'rotate(-90deg)',
            transformOrigin: 'center',
          }}
        />
      </svg>
      <DonutText aria-hidden="true">{Math.round(safePercentage)}%</DonutText>
    </DonutContainer>
  );
};
