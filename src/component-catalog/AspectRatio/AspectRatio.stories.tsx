import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { AspectRatio } from './AspectRatio';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AspectRatio> = {
  title: 'Components/AspectRatio',
  component: AspectRatio,
};

export default meta;

type Story = StoryObj<typeof AspectRatio>;

const DemoContent = ({ label }: { label: string }) => (
  <Box
    sx={(theme) => ({
      width: '100%',
      height: '100%',
      backgroundColor: theme.palette.grey[300],
      borderRadius: theme.spacing(0.5),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.text.secondary,
      fontWeight: theme.typography.fontWeightMedium,
    })}
  >
    {label}
  </Box>
);

export const MultipleRatios: Story = {
  render: () => (
    <Box
      sx={{
        p: 3,
      }}
    >
      {/* Header */}
      <Typography variant="h5" gutterBottom>
        Aspect Ratio
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Maintain aspect ratios
      </Typography>

      {/* Ratios */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: '1fr 1fr',
          },
          gap: 3,
          width: '100%',
          maxWidth: '900px',
        }}
      >
        {/* 16:9 */}
        <Box>
          <Typography sx={{ mb: 1 }}>16:9 Ratio</Typography>

          <AspectRatio ratio="16/9">
            <DemoContent label="16:9" />
          </AspectRatio>
        </Box>

        {/* 1:1 */}
        <Box>
          <Typography sx={{ mb: 1 }}>1:1 Ratio</Typography>

          <AspectRatio ratio="1/1">
            <DemoContent label="1:1" />
          </AspectRatio>
        </Box>
      </Box>
    </Box>
  ),
};
