import { CircularProgress, useTheme, Typography } from '@mui/material';
import React from 'react';

import { ProgressVariant, ProgressMode } from './Progress.constants';
import { useProgress } from './Progress.hook';
import {
  Wrapper,
  Label,
  CircularWrapper,
  StyledLinear,
  ContainerCard,
  ProgressHeader,
} from './Progress.styles';

import type { ProgressProps } from './Progress.types';

const DEFAULT_CIRCULAR_SIZE = 6; // theme spacing multiplier
const DEFAULT_THICKNESS = 4;

export const Progress: React.FC<ProgressProps> = (props) => {
  const {
    variant = ProgressVariant.LINEAR,
    mode = ProgressMode.DETERMINATE,
    value = 60,
    showLabel = true,
    color = 'primary',
    size,
    thickness = DEFAULT_THICKNESS,
  } = props;

  const theme = useTheme();

  const paletteColor = theme.palette[color as keyof typeof theme.palette];

  const finalColor = (paletteColor as { main: string }).main;

  const resolvedSize = size ?? theme.spacing(DEFAULT_CIRCULAR_SIZE);

  const { normalized } = useProgress(value);

  const isDeterminate = mode === ProgressMode.DETERMINATE;

  return (
    <ContainerCard>
      <ProgressHeader>
        <Typography sx={{ color: theme.palette.text.secondary }}>Progress</Typography>

        {showLabel &&
          isDeterminate &&
          variant === ProgressVariant.LINEAR &&
          mode === ProgressMode.DETERMINATE && (
            <Label sx={{ color: finalColor }}>{normalized}%</Label>
          )}
      </ProgressHeader>

      {variant === ProgressVariant.CIRCULAR ? (
        <CircularWrapper>
          <CircularProgress
            variant={isDeterminate ? 'determinate' : 'indeterminate'}
            value={normalized}
            size={resolvedSize}
            thickness={thickness}
            sx={{ color: finalColor }}
          />
        </CircularWrapper>
      ) : (
        <Wrapper>
          <StyledLinear
            variant={isDeterminate ? 'determinate' : 'indeterminate'}
            value={normalized}
            color={color}
          />
        </Wrapper>
      )}
    </ContainerCard>
  );
};
