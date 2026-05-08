import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const StyledInputLabel = styled(InputLabel)(
  ({ theme }) => ({
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
  })
);

export const RequiredIndicator = styled('span')(
  ({ theme }) => ({
    color: theme.palette.error.main,
    marginInlineStart: theme.spacing(0.25),
    fontWeight: theme.typography.fontWeightBold,
  })
);

export const OptionalHint = styled(Typography)(
  ({ theme }) => ({
    fontSize: theme.typography.caption.fontSize,
    lineHeight: theme.typography.caption.lineHeight,
    color: theme.palette.text.secondary,
    marginInlineStart: theme.spacing(0.5),
    fontStyle: 'italic',

    /**
     * Keep optional text inline
     * inside the label flow.
     */
    display: 'inline',
  })
) as typeof Typography;

export const TooltipIconWrapper = styled('span')(
  ({ theme }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    marginInlineStart: theme.spacing(0.25),

    /**
     * Prevent icon shrinking
     * in narrow layouts.
     */
    flexShrink: 0,
  })
);

/**
 * Tooltip button styles
 * extracted from inline sx props
 * for better style consistency.
 */
export const TooltipIconButton = styled(IconButton)(
  ({ theme }) => ({
    padding: theme.spacing(0.25),
  })
);

/**
 * Tooltip icon styles
 * using theme typography sizing
 * instead of hardcoded values.
 */
export const TooltipInfoIcon = styled('span')(
  ({ theme }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: theme.typography.body2.fontSize,
    lineHeight: 1,
  })
);