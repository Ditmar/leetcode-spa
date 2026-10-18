import { Alert, Box, Button, Typography } from '@mui/material';

import { errorActionsSx, errorMessageSx, errorStateSx } from './ErrorState.styles';

import type { ErrorStateProps } from './ErrorState.types';

export const ErrorState = ({ error, onRetry, requestId }: ErrorStateProps) => {
  return (
    <Box role="alert" sx={errorStateSx}>
      <Typography component="h2" variant="h6">
        Something went wrong
      </Typography>

      <Alert severity="error" sx={errorMessageSx}>
        {error.message}
      </Alert>

      {requestId && <Typography variant="caption">Request ID: {requestId}</Typography>}

      <Box sx={errorActionsSx}>
        <Button variant="contained" onClick={onRetry}>
          Retry
        </Button>
      </Box>
    </Box>
  );
};

export default ErrorState;
