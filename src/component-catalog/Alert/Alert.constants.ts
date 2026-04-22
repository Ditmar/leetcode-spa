import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';

import type { AlertSeverity, AlertStylesVariants } from './Alert.types';

export const ALERT_VARIANTS: Record<AlertSeverity, AlertStylesVariants> = {
  info: {
    backgroundColor: 'var(--info-bg)',
    borderColor: 'var(--info-border)',
    titleColor: 'var(--info-title)',
    descriptionColor: 'var(--info-foreground)',
  },
  success: {
    backgroundColor: 'var(--success-bg)',
    borderColor: 'var(--success-border)',
    titleColor: 'var(--success-title)',
    descriptionColor: 'var(--success-foreground)',
  },
  warning: {
    backgroundColor: 'var(--warning-bg)',
    borderColor: 'var(--warning-border)',
    titleColor: 'var(--warning-title)',
    descriptionColor: 'var(--warning-foreground)',
  },
  error: {
    backgroundColor: 'var(--error-bg)',
    borderColor: 'var(--error-border)',
    titleColor: 'var(--error-title)',
    descriptionColor: 'var(--error-foreground)',
  },
};

export const ALERT_ICONS = {
  info: InfoOutlinedIcon,
  success: CheckCircleOutlineIcon,
  warning: ReportProblemOutlinedIcon,
  error: ErrorOutlineIcon,
} as const;
