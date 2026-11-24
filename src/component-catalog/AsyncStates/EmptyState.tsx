import { Box, Typography } from '@mui/material';

import { emptyStateIconSx, emptyStateSx } from './EmptyState.styles';

import type { EmptyStateProps } from './EmptyState.types';

export const EmptyState = ({ icon, title, description, action }: EmptyStateProps) => {
  return (
    <Box role="status" sx={emptyStateSx}>
      {icon && (
        <Box aria-hidden="true" sx={emptyStateIconSx}>
          {icon}
        </Box>
      )}

      <Typography component="h2" variant="h6">
        {title}
      </Typography>

      {description && <Typography variant="body2">{description}</Typography>}

      {action && <Box>{action}</Box>}
    </Box>
  );
};

export default EmptyState;
