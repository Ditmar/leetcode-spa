import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';

import type { AlertSeverity, AlertStylesVariants } from './Alert.types';

export const ALERT_VARIANTS: Record<AlertSeverity, AlertStylesVariants> = {
  info: {
    backgroundColor: '#FFFFFF',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    titleColor: '#0A0A0A',
    descriptionColor: '#717182',
  },
  success: {
    backgroundColor: '#F0FDF4',
    borderColor: '#B9F8CF',
    titleColor: '#016630',
    descriptionColor: '#008236',
  },
  warning: {
    backgroundColor: '#FEFCE8',
    borderColor: '#FFF085',
    titleColor: '#894B00',
    descriptionColor: '#A65F00',
  },
  error: {
    backgroundColor: '#FFFFFF',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    titleColor: '#D4183D',
    descriptionColor: 'rgba(212, 24, 61, 0.9)',
  },
};

export const ALERT_ICONS = {
  info: InfoOutlinedIcon,
  success: CheckCircleOutlineIcon,
  warning: ReportProblemOutlinedIcon,
  error: ErrorOutlineIcon,
} as const;
