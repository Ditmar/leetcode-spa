import { Alert, Box, Button, Skeleton, Stack, Typography } from '@mui/material';

/*
 * Local loading / empty / error states for the problems page.
 * TODO(SPA-030): replace with the shared Skeleton, EmptyState and ErrorState components.
 */

export function ProblemsLoadingState({ rows = 8 }: { rows?: number }) {
  return (
    <Stack spacing={1} role="status" aria-label="Loading problems" data-testid="problems-loading">
      {Array.from({ length: rows }, (_, index) => (
        <Skeleton key={index} variant="rounded" height={36} />
      ))}
    </Stack>
  );
}

export interface ProblemsEmptyStateProps {
  actionLabel?: string;
  onAction?: () => void;
}

export function ProblemsEmptyState({ actionLabel, onAction }: ProblemsEmptyStateProps) {
  return (
    <Box sx={{ py: 6, textAlign: 'center' }} data-testid="problems-empty">
      <Typography variant="h6" component="p">
        No problems found
      </Typography>
      <Typography color="text.secondary" sx={{ mt: 1 }}>
        Try another search or remove some filters.
      </Typography>
      {actionLabel && onAction && (
        <Button sx={{ mt: 2 }} variant="outlined" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </Box>
  );
}

export interface ProblemsErrorStateProps {
  message: string;
  onRetry: () => void;
}

export function ProblemsErrorState({ message, onRetry }: ProblemsErrorStateProps) {
  return (
    <Alert
      severity="error"
      data-testid="problems-error"
      action={
        <Button color="inherit" size="small" onClick={onRetry}>
          Try again
        </Button>
      }
    >
      {message}
    </Alert>
  );
}
