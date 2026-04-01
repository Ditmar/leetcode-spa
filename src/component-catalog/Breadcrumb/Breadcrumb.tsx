import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';

import iconSvg from '../../assets/icon-breadcrumb.svg';

import { DEFAULT_MAX_ITEMS } from './Breadcrumb.constants';
import { useBreadcrumb } from './Breadcrumb.hook';
import { StyledBreadcrumbs, StyledBreadcrumbContainer, ResponsiveIcon } from './Breadcrumb.styles';
import { getCollapsedItems } from './Breadcrumb.utils';

import type { CustomBreadcrumbProps } from './Breadcrumb.types';

export const Breadcrumb: React.FC<CustomBreadcrumbProps> = ({
  items,
  maxItems = DEFAULT_MAX_ITEMS,
  separator,
  ...props
}) => {
  const theme = useTheme();
  const { expanded, handleExpand } = useBreadcrumb();

  const visibleItems = getCollapsedItems(items, maxItems, expanded);

  const DEFAULT_SEPARATOR = (
    <NavigateNextIcon fontSize="small" sx={{ color: theme.palette.text.secondary }} />
  );

  const getSafeSeparator = (sep: unknown) => {
    if (sep == null) return DEFAULT_SEPARATOR;

    if (typeof sep === 'string' && sep.trim().length === 0) {
      return DEFAULT_SEPARATOR;
    }

    if (typeof sep === 'string') return sep;

    if (React.isValidElement(sep)) return sep;

    return DEFAULT_SEPARATOR;
  };

  const safeSeparator = getSafeSeparator(separator);

  return (
    <StyledBreadcrumbContainer>
      <StyledBreadcrumbs separator={safeSeparator} aria-label="breadcrumb" {...props}>
        <ResponsiveIcon src={iconSvg} alt="home" />

        {visibleItems.map((item, index) => {
          const isLast = index === visibleItems.length - 1;

          if (item.label === '...') {
            return (
              <Typography
                key={index}
                onClick={handleExpand}
                aria-expanded={expanded}
                sx={{
                  cursor: 'pointer',
                  fontSize: theme.typography.body2.fontSize,
                  color: theme.palette.text.secondary,
                }}
              >
                ...
              </Typography>
            );
          }

          if (isLast) {
            return (
              <Typography
                key={index}
                aria-current="page"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: theme.spacing(0.5),
                  fontSize: theme.typography.body2.fontSize,
                  fontWeight: theme.typography.fontWeightMedium,
                  color: theme.palette.text.primary,
                }}
              >
                {item.icon}
                {item.label}
              </Typography>
            );
          }

          return (
            <Link
              key={index}
              underline="hover"
              href={item.href}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: theme.spacing(0.5),
                fontSize: theme.typography.body2.fontSize,
                color: theme.palette.text.secondary,
              }}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
      </StyledBreadcrumbs>
    </StyledBreadcrumbContainer>
  );
};
