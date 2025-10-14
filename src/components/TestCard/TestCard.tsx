import React from 'react';
import type { CardProps } from '@mui/material';
import { Card, CardMedia, Typography, Box } from '@mui/material';
import type { TestCardProps } from './TestCard.types';

export const TestCard: React.FC<TestCardProps> = ({
  logo,
  title,
  description,
  onSelect,
  ...cardProps
}) => {
  const cardStyles = {
    position: 'relative',
    width: 300,
    height: 420,
    borderRadius: 2,
    overflow: 'hidden',
    cursor: 'pointer',
    mx: 'auto',
  };

  const overlayStyles = {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    color: '#fff',
    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
    backdropFilter: 'blur(6px)',
    p: 3,
  };

  const imageStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
  };

  const logoWrapperStyles = {
    position: 'absolute',
    width: '100%',
    height: '100%',
  };

  return (
    <Card sx={cardStyles} onClick={onSelect} {...cardProps} data-testid="test-card">
      {typeof logo === 'string' ? (
        <CardMedia component="img" image={logo} alt={title} sx={imageStyles} />
      ) : (
        <Box sx={logoWrapperStyles}>{logo}</Box>
      )}

      <Box sx={overlayStyles}>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis' }}
          data-testid="test-card-title"
        >
          {title}
        </Typography>
        <Typography variant="body2" data-testid="test-card-description">
          {description}
        </Typography>
      </Box>
    </Card>
  );
};

