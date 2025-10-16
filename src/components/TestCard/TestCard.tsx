import React from 'react';
import type { TestCardProps } from './TestCard.types';
import { Card, CardActionArea, CardMedia, Box, Typography } from '@mui/material';
import { cardSx, logoSx, contentSx } from './TestCard.styles';
import type { SxProps, Theme } from '@mui/material';

export const TestCard: React.FC<TestCardProps & { sx?: SxProps<Theme> }> = ({
  logo,
  title,
  description,
  layout = 'horizontal',
  onSelect,
  sx,
  ...cardProps
}) => {
  const combinedSx = { ...cardSx(layout), ...sx } as SxProps<Theme>;

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if (onSelect) onSelect(event);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
    }
  };

  return (
    <Card sx={combinedSx} {...cardProps} data-testid="test-card">
      <CardActionArea
        component="div"
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        data-testid="test-card-layout"
        sx={{
          display: 'flex',
          flexDirection: layout === 'horizontal' ? 'row' : 'column',
          width: '100%',
          height: '100%',
        }}
      >
        {typeof logo === 'string' ? (
          <CardMedia component="img" image={logo} alt={title} sx={logoSx(layout)} />
        ) : (
          <Box sx={logoSx(layout)}>{logo}</Box>
        )}

        <Box sx={contentSx(layout)}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 'bold',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
            data-testid="test-card-title"
          >
            {title}
          </Typography>
          <Typography variant="body2" data-testid="test-card-description">
            {description}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
};
