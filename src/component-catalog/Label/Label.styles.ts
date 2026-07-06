import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  lineHeight: theme.typography.body2.lineHeight,
  fontWeight: theme.typography.fontWeightMedium,
  color: theme.palette.text.primary,

  whiteSpace: 'normal',
  wordBreak: 'break-word',
  overflow: 'visible',

  display: 'inline-flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: theme.spacing(0.5),

  position: 'static',
  transform: 'none',
  transformOrigin: 'unset',

  '&.Mui-disabled': {
    color: theme.palette.text.disabled,
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&.Mui-error': {
    color: theme.palette.error.main,
  },
}));

export const RequiredIndicator = styled('span')(({ theme }) => ({
  color: theme.palette.error.main,
  marginInlineStart: '0.25rem',
  fontWeight: theme.typography.fontWeightBold,
  display: 'inline-block',
}));

export const OptionalHint = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.caption.fontSize,
  lineHeight: theme.typography.caption.lineHeight,
  color: theme.palette.text.secondary,
  marginInlineStart: '0.25rem',
  fontStyle: 'italic',
  display: 'inline',
})) as typeof Typography;

export const TooltipIconWrapper = styled('span')({
  display: 'inline-flex',
  alignItems: 'center',
  marginInlineStart: '0.25rem',
  flexShrink: 0,
});

export const TooltipIconButton = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(0.25),
  color: theme.palette.action.active,

  '&:disabled': {
    color: theme.palette.action.disabled,
  },
}));

export const TooltipInfoIcon = styled(InfoOutlinedIcon)({
  fontSize: '1.125rem',
  display: 'block',
});
