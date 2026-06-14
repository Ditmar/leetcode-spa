import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import type { ErrorFallbackProps } from './ErrorBoundary.types';

const isDevelopment = process.env.NODE_ENV !== 'production';

export default function ErrorFallback({ error, errorInfo, onReload }: ErrorFallbackProps) {
  return (
    <Paper
      elevation={0}
      role="alert"
      sx={{
        p: 3,
        border: 1,
        borderColor: 'var(--border)',
        borderRadius: 'var(--radius-lg)',
        bgcolor: 'var(--card)',
        color: 'var(--foreground)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      <Stack spacing={2}>
        <Typography variant="h5" component="h2" fontWeight={700}>
          Something went wrong
        </Typography>

        <Typography variant="body2" color="text.secondary">
          The interface could not be rendered correctly. Please reload the page and try again.
        </Typography>

        {isDevelopment && error ? (
          <Stack spacing={1}>
            <Typography variant="subtitle2" component="h3">
              Development details
            </Typography>

            <Paper
              component="pre"
              elevation={0}
              sx={{
                m: 0,
                p: 2,
                overflowX: 'auto',
                bgcolor: 'var(--muted)',
                borderRadius: 'var(--radius-lg)',
                fontFamily: '"Fira Code", "Courier New", monospace',
                fontSize: '0.75rem',
                whiteSpace: 'pre-wrap',
              }}
            >
              {`${error.name}: ${error.message}

${error.stack ?? ''}

${errorInfo?.componentStack ?? ''}`}
            </Paper>
          </Stack>
        ) : null}

        <Button variant="contained" onClick={onReload}>
          Reload
        </Button>
      </Stack>
    </Paper>
  );
}
