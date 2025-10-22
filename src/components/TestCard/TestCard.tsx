import { CardActionArea, Typography } from '@mui/material';
import React from 'react';

import { CARD_BORDER_RADIUS, CARD_DEFAULT_HEIGHT, CARD_DEFAULT_WIDTH } from './TestCard.constants';
import { StyledCard, StyledOverlay } from './TestCard.styles';

import type { TestCardProps } from './TestCard.types';

export const TestCard: React.FC<TestCardProps> = ({
  description,
  logo,
  onSelect,
  orientation = 'vertical',
  title,
  ...cardProps
}) => {
  return (
    <StyledCard
      {...cardProps}
      data-testid="test-card"
      orientation={orientation}
      sx={{
        height: orientation === 'horizontal' ? CARD_DEFAULT_WIDTH : CARD_DEFAULT_HEIGHT,
        width: orientation === 'horizontal' ? CARD_DEFAULT_HEIGHT : CARD_DEFAULT_WIDTH,
      }}
    >
      <CardActionArea
        aria-label={title || 'Interactive card'}
        onClick={onSelect}
        sx={{ height: '100%', width: '100%' }}
      >
        {typeof logo === 'string' ? (
          <img
            alt={title || 'Card image'}
            src={logo}
            style={{
              borderRadius: CARD_BORDER_RADIUS,
              height: '100%',
              objectFit: 'cover',
              pointerEvents: 'none',
              width: '100%',
            }}
          />
        ) : (
          <div style={{ pointerEvents: 'none' }}>{logo}</div>
        )}
        <StyledOverlay>
          <div style={{ textAlign: 'center' }}>
            {title && (
              <Typography component="h3" variant="h6">
                {title}
              </Typography>
            )}
            {description && (
              <Typography component="p" variant="body2">
                {description}
              </Typography>
            )}
          </div>
        </StyledOverlay>
      </CardActionArea>
    </StyledCard>
  );
};
