import { styled, InputLabel, Box } from '@mui/material';

import type { LabelProps } from './Label.types';

export const StyledInputLabel = styled(InputLabel, {
  shouldForwardProp: (prop) => !['optional', 'tooltip'].includes(prop as string),
})<LabelProps>(({ theme, disabled, error }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  position: 'relative',
  whiteSpace: 'normal',
  wordBreak: 'break-word',
  fontSize: '1rem',
  fontWeight: 500,
  lineHeight: 1.5,
  marginBottom: theme.spacing(0.5),
  minHeight: '1.5em',
  color: error ? theme.palette.error.main : theme.palette.text.primary,
  opacity: disabled ? 0.5 : 1,

  '& .MuiFormLabel-asterisk': {
    color: theme.palette.error.main,
  },
}));

export const OptionalText = styled('span')(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
  marginLeft: theme.spacing(0.5),
  fontStyle: 'italic',
}));

export const LabelWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  maxWidth: '100%',
});
