import { Box, Card, CardActionArea, CardMedia, Typography } from '@mui/material';
import React from 'react';

import { cardSx, contentSx, logoSx } from './TestCard.styles';

import type { TestCardProps } from './TestCard.types';
import type { SxProps, Theme } from '@mui/material';

export const TestCard: React.FC<TestCardProps & { sx?: SxProps<Theme> }> = ({
  description,
  layout = 'horizontal',
  logo,
  onSelect,
  sx,
  title,
  ...cardProps
}) => {
  const combinedSx = { ...cardSx(layout), ...sx } as SxProps<Theme>;

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    onSelect?.(event);
  };

  return (
    <Card
      sx={{
        ...combinedSx,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: 6,
        },
      }}
      {...cardProps}
      data-testid="test-card"
    >
      <CardActionArea
        component="div"
        role="button"
        tabIndex={0}
        onClick={handleClick}
        sx={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: layout === 'horizontal' ? 'row' : 'column',
        }}
      >
        <Box sx={logoSx(layout)}>
          {typeof logo === 'string' ? (
            <CardMedia
              component="img"
              image={logo}
              alt={title}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          ) : (
            <Box
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            >
              {logo}
            </Box>
          )}
        </Box>

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

          <Typography variant="body2" sx={{ opacity: 0.9 }} data-testid="test-card-description">
            {description}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
};
