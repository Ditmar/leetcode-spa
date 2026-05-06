import { CircularProgress, useTheme, Typography } from '@mui/material';
import React, { useState } from 'react';

import { ProgressVariant, ProgressMode } from './Progress.constants';
import { useProgress } from './Progress.hook';
import {
  Wrapper,
  Label,
  CircularWrapper,
  StyledLinear,
  ContainerCard,
  ControlsWrapper,
  StyledButton,
  Header,
} from './Progress.styles';

import type { ProgressProps, ProgressColor } from './Progress.types';

export const Progress: React.FC<ProgressProps> = (props) => {
  const {
    variant = ProgressVariant.LINEAR,
    mode = ProgressMode.DETERMINATE,
    value = 60,
    showLabel = true,
    color = 'primary',
    size = '3rem',
    thickness = 4,
  } = props;

  const theme = useTheme();

  const [internalValue, setInternalValue] = useState<number>(value);

  // ✅ obtener color SOLO desde theme
  const paletteColor = theme.palette[color as ProgressColor];

  const finalColor = paletteColor.main;
  const contrastText = paletteColor.contrastText;

  const { normalized } = useProgress(internalValue);

  const isDeterminate = mode === ProgressMode.DETERMINATE;

  const increase = () => setInternalValue((prev) => Math.min(100, prev + 10));

  const decrease = () => setInternalValue((prev) => Math.max(0, prev - 10));

  return (
    <ContainerCard>
      <Header>
        <Typography sx={{ color: theme.palette.text.secondary }}>Progress</Typography>

        {showLabel && isDeterminate && <Label sx={{ color: finalColor }}>{normalized}%</Label>}
      </Header>

      {variant === ProgressVariant.CIRCULAR ? (
        <CircularWrapper>
          <CircularProgress
            variant={isDeterminate ? 'determinate' : 'indeterminate'}
            value={normalized}
            size={size}
            thickness={thickness}
            sx={{ color: finalColor }}
          />
        </CircularWrapper>
      ) : (
        <Wrapper>
          <StyledLinear
            variant={isDeterminate ? 'determinate' : 'indeterminate'}
            value={normalized}
            sx={{
              backgroundColor: theme.palette.grey[300],
              '& .MuiLinearProgress-bar': {
                backgroundColor: finalColor,
              },
            }}
          />
        </Wrapper>
      )}

      <ControlsWrapper sx={{ mt: 2 }}>
        <StyledButton bgcolor={finalColor} sx={{ color: contrastText }} onClick={decrease}>
          Decrease
        </StyledButton>

        <StyledButton bgcolor={finalColor} sx={{ color: contrastText }} onClick={increase}>
          Increase
        </StyledButton>
      </ControlsWrapper>
    </ContainerCard>
  );
};
