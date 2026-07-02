import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import type { ErrorFallbackProps } from './ErrorBoundary.types';

const shouldShowDevelopmentDetails = process.env.NODE_ENV !== 'production';

const sanitizeErrorDetails = (value: string) =>
  value.replace(
    /(password|token|secret|api[_-]?key|authorization)(=|:)\s*([^\s,;]+)/gi,
    '$1$2 [REDACTED]'
  );

export default function ErrorFallback({ error, errorInfo, onReload }: ErrorFallbackProps) {
  const developmentDetails =
    shouldShowDevelopmentDetails && error
      ? sanitizeErrorDetails(`${error.name}: ${error.message}

${error.stack ?? ''}

${errorInfo?.componentStack ?? ''}`)
      : null;

  return (
    <Paper
      elevation={0}
      role="alert"
      sx={{
        width: '100%',
        maxWidth: 720,
        mx: 'auto',
        p: { xs: 3, md: 4 },
        border: 1,
        borderColor: 'divider',
        borderRadius: 3,
        bgcolor: 'background.paper',
        color: 'text.primary',
        textAlign: 'center',
      }}
    >
      <Stack spacing={2.5} alignItems="center">
        <Typography variant="h4" component="h2" fontWeight={800}>
          Something went wrong
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Please reload the page and try again.
        </Typography>

        {developmentDetails ? (
          <Paper
            component="pre"
            elevation={0}
            sx={{
              width: '100%',
              m: 0,
              p: 2,
              overflowX: 'auto',
              bgcolor: 'action.hover',
              borderRadius: 2,
              fontFamily: '"Fira Code", "Courier New", monospace',
              fontSize: '0.75rem',
              whiteSpace: 'pre-wrap',
              textAlign: 'left',
            }}
          >
            {developmentDetails}
          </Paper>
        ) : null}

        <Button variant="contained" onClick={onReload}>
          Reload
        </Button>
      </Stack>
    </Paper>
  );
}
