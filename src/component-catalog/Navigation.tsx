import { Button, Stack } from '@mui/material';

export const Navigation = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Button component="a" href="/">
        Home
      </Button>

      <Button component="a" href="/about">
        About
      </Button>

      <Button component="a" href="/contact">
        Contact
      </Button>
    </Stack>
  );
};
