import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import type { AlertSeverity } from './Alert.types';

export const StyledAlertContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'severity',
})<{ severity: AlertSeverity }>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  padding: `${theme.spacing(1.5)} ${theme.spacing(2)}`,
  gap: theme.spacing(1.5),
  width: '100%',
  maxWidth: theme.breakpoints.values.lg,
  boxSizing: 'border-box',
  borderRadius: theme.shape.borderRadius,
}));

export const StyledIconWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'severity',
})<{ severity: AlertSeverity }>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  width: theme.spacing(2),
  height: theme.spacing(2),
  marginTop: theme.spacing(0.25),
}));

export const StyledContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: 0,
  gap: theme.spacing(0.25),
}));

export const StyledTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'severity',
})<{ severity: AlertSeverity }>(({ theme }) => ({
  ...theme.typography.subtitle2,
  fontStyle: 'normal',
}));

export const StyledDescription = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'severity',
})<{ severity: AlertSeverity }>(({ theme }) => ({
  ...theme.typography.body2,
  fontStyle: 'normal',
}));
