import { Box, Typography } from '@mui/material';

import { COLOR } from './MenuBadge.constraints';

type MenuBadgeProps = {
  label: string;
  variant?: 'default' | 'color';
};

export const MenuBadge: React.FC<MenuBadgeProps> = ({ label, variant = 'default' }) => {
  const isColor = variant === 'color';

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '1.8rem',
        background: 'transparent',
        cursor: 'pointer',
        padding: '6px 12px',
      }}
      data-testid="menuBadge"
    >
      <Box
        component="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        sx={{
          width: 32,
          height: 32,
        }}
      >
        <defs>
          <linearGradient
            id="gradient"
            x1="2"
            y1="20"
            x2="24"
            y2="24"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="13.4%" stopColor="#B33DEB" />
            <stop offset="86.6%" stopColor="#DE8FFF" />
          </linearGradient>
        </defs>
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="4"
          ry="5"
          fill="none"
          stroke={isColor ? 'url(#gradient)' : 'black'}
          strokeWidth="1.4"
        />
        <rect
          x="7"
          y="11"
          width="2"
          height="5"
          rx="1"
          fill={isColor ? 'url(#gradient)' : 'black'}
        />
        <rect
          x="11"
          y="7"
          width="2"
          height="9"
          rx="1"
          fill={isColor ? 'url(#gradient)' : 'black'}
        />
        <rect
          x="15"
          y="10"
          width="2"
          height="6"
          rx="1"
          fill={isColor ? 'url(#gradient)' : 'black'}
        />
      </Box>

      <Typography
        data-variant={variant}
        variant="body1"
        sx={{
          fontWeight: 500,
          fontSize: '18px',
          fontFamily: 'Syne, sans-serif',
          background: isColor ? COLOR.primary : 'none',
          WebkitBackgroundClip: isColor ? 'text' : 'none',
          WebkitTextFillColor: isColor ? 'transparent' : 'black',
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};
