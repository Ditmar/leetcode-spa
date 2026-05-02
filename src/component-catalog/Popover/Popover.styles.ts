import { Box, IconButton, styled } from '@mui/material';

import { POPOVER_ARROW_SIZE } from './Popover.constants';

interface ArrowProps {
  arrowSide: 'top' | 'bottom' | 'left' | 'right';
}

export const PopoverTriggerWrapper = styled(Box)(() => ({
  display: 'inline-flex',
}));

export const PopoverContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  maxWidth: theme.spacing(40),
  padding: theme.spacing(2),
  borderRadius: 'var(--radius)',
  backgroundColor: 'var(--popover)',
  color: 'var(--popover-foreground)',
  border: '1px solid var(--border)',
  boxShadow: 'var(--shadow-md)',
  boxSizing: 'border-box',

  [theme.breakpoints.down('sm')]: {
    width: `calc(100vw - ${theme.spacing(4)})`,
    maxWidth: `calc(100vw - ${theme.spacing(4)})`,
  },
}));

export const PopoverArrow = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'arrowSide',
})<ArrowProps>(({ theme, arrowSide }) => ({
  position: 'absolute',
  width: theme.spacing(POPOVER_ARROW_SIZE),
  height: theme.spacing(POPOVER_ARROW_SIZE),
  backgroundColor: 'var(--popover)',
  border: '1px solid var(--border)',
  transform: 'rotate(45deg)',
  boxSizing: 'border-box',

  ...(arrowSide === 'top' && {
    top: `calc(-1 * ${theme.spacing(POPOVER_ARROW_SIZE / 2)})`,
    left: '50%',
    marginLeft: `calc(-1 * ${theme.spacing(POPOVER_ARROW_SIZE / 2)})`,
  }),

  ...(arrowSide === 'bottom' && {
    bottom: `calc(-1 * ${theme.spacing(POPOVER_ARROW_SIZE / 2)})`,
    left: '50%',
    marginLeft: `calc(-1 * ${theme.spacing(POPOVER_ARROW_SIZE / 2)})`,
  }),

  ...(arrowSide === 'left' && {
    left: `calc(-1 * ${theme.spacing(POPOVER_ARROW_SIZE / 2)})`,
    top: '50%',
    marginTop: `calc(-1 * ${theme.spacing(POPOVER_ARROW_SIZE / 2)})`,
  }),

  ...(arrowSide === 'right' && {
    right: `calc(-1 * ${theme.spacing(POPOVER_ARROW_SIZE / 2)})`,
    top: '50%',
    marginTop: `calc(-1 * ${theme.spacing(POPOVER_ARROW_SIZE / 2)})`,
  }),
}));

export const PopoverCloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(0.5),
  right: theme.spacing(0.5),
  color: 'var(--popover-foreground)',
}));
