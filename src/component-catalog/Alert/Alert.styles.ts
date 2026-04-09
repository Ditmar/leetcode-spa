import { styled, Box, Typography } from '@mui/material';

import { ALERT_VARIANTS } from './Alert.constants';

import type { AlertSeverity } from './Alert.types';

export const StyledAlertContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'severity',
})<{ severity: AlertSeverity }>(({ severity }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  padding: '13px 17px',
  gap: '12px',
  width: '100%',
  maxWidth: '1216px',
  minHeight: '68px',
  boxSizing: 'border-box',
  borderRadius: '10px',
  backgroundColor: ALERT_VARIANTS[severity].backgroundColor,
  border: `1px solid ${ALERT_VARIANTS[severity].borderColor}`,
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.2s ease-in-out',
}));

export const StyledIconWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'severity',
})<{ severity: AlertSeverity }>(({ severity }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  width: '16px',
  height: '16px',
  marginTop: '2px',
  color: ALERT_VARIANTS[severity].titleColor,
  '& svg': {
    width: '100%',
    height: '100%',
  },
}));

export const StyledContentWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: 0,
  gap: '2px',
  flexGrow: 1,
});

export const StyledTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'severity',
})<{ severity: AlertSeverity }>(({ severity }) => ({
  fontFamily: "'Inter', sans-serif",
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: '-0.35px',
  color: ALERT_VARIANTS[severity].titleColor,
  margin: 0,
  wordBreak: 'break-word',
}));

export const StyledDescription = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'severity',
})<{ severity: AlertSeverity }>(({ severity }) => ({
  fontFamily: "'Inter', sans-serif",
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '20px',
  color: ALERT_VARIANTS[severity].descriptionColor,
  margin: 0,
  wordBreak: 'break-word',
}));
