import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import type { ErrorPageProps } from './ErrorPage.types';

export default function ErrorPage({
  code,
  title,
  description,
  actionLabel,
  actionHref,
}: ErrorPageProps) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 3,
        bgcolor: 'background.default',
      }}
    >
      <Stack
        spacing={3}
        alignItems="center"
        textAlign="center"
        sx={{
          maxWidth: 700,
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontWeight: 800,
            fontSize: { xs: '5rem', md: '8rem' },
            lineHeight: 1,
            letterSpacing: '-0.05em',
            color: '#073B4C',
          }}
        >
          {code}
        </Typography>

        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: 700,
            color: 'text.primary',
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            maxWidth: 600,
            lineHeight: 1.8,
          }}
        >
          {description}
        </Typography>

        <Button
          variant="contained"
          size="large"
          href={actionHref}
          sx={{
            px: 4,
            py: 1.2,
            textTransform: 'none',
            fontWeight: 700,
            borderRadius: 2,
          }}
        >
          {actionLabel}
        </Button>
      </Stack>
    </Box>
  );
}
