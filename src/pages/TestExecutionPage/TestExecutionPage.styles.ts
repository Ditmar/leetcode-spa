import { Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { TEST_EXECUTION_PAGE_LAYOUT } from './TestExecutionPage.constants';

import type { Theme } from '@mui/material/styles';

// -------- ROOT CONTAINER --------
export const Root = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
}));

// -------- SIDEBAR --------
export const SidebarContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: 'none',
  [theme.breakpoints.up(TEST_EXECUTION_PAGE_LAYOUT.mobileBreakpoint)]: {
    display: 'block',
    width: TEST_EXECUTION_PAGE_LAYOUT.sidebarWidthDesktop,
    flexShrink: 0,
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.paper,
  },
}));

// -------- CONTENT --------
export const ContentContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
  [theme.breakpoints.up(TEST_EXECUTION_PAGE_LAYOUT.mobileBreakpoint)]: {
    padding: theme.spacing(4),
  },
}));

// -------- HEADER --------
export const Header = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
  [theme.breakpoints.up(TEST_EXECUTION_PAGE_LAYOUT.mobileBreakpoint)]: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

// -------- QUESTION CARD --------
export const QuestionContainer = styled(Stack)(({ theme }: { theme: Theme }) => ({
  flex: 1,
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[1],
}));

export const QuestionTitle = styled(Typography)(({ theme }: { theme: Theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
}));

// -------- FOOTER --------
export const Footer = styled(Box)(({ theme }: { theme: Theme }) => ({
  marginTop: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  [theme.breakpoints.up(TEST_EXECUTION_PAGE_LAYOUT.mobileBreakpoint)]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

// -------- PROGRESS --------
export const ProgressContainer = styled(Stack)(({ theme }: { theme: Theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: theme.spacing(2),
}));
