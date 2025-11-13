import { Card, Box } from '@mui/material';
import * as React from 'react';

import darkIcon from './assets/dark.svg';
import gradientIcon from './assets/gradient.svg';
import { DEFAULT_LABEL_PRIMARY, DEFAULT_LABEL_SECONDARY } from './Menu-Badge.constraints';
import { MenuBadgeContainer, IconWrapper, LabelText } from './Menu-Badge.styles';

import type { MenuBadgeProps } from './Menu-Badge.types';

export const MenuBadge: React.FC<MenuBadgeProps> = ({ label, variant = 'primaryText' }) => {
  const isSecondary = variant === 'secondaryText';
  const visibleLabel = label ?? (isSecondary ? DEFAULT_LABEL_SECONDARY : DEFAULT_LABEL_PRIMARY);

  return (
    <Box
      role="menuitem"
      data-testid="menu-badge-wrapper"
      sx={{ display: 'flex', alignItems: 'center' }}
    >
      <Card sx={{ boxShadow: 'none', bgcolor: 'transparent', width: 'auto' }}>
        <MenuBadgeContainer>
          <IconWrapper>
            {isSecondary ? (
              <Box
                component="img"
                src={gradientIcon}
                alt="MenuBadge gradient"
                sx={{
                  width: '19.5px',
                  height: '19.5px',
                  alignSelf: 'center',
                }}
              />
            ) : (
              <Box
                component="img"
                src={darkIcon}
                alt="MenuBadge dark"
                sx={{
                  width: '19.5px',
                  height: '19.5px',
                  alignSelf: 'center',
                }}
              />
            )}
          </IconWrapper>

          {visibleLabel && <LabelText variant={variant}>{visibleLabel}</LabelText>}
        </MenuBadgeContainer>
      </Card>
    </Box>
  );
};

export default MenuBadge;
