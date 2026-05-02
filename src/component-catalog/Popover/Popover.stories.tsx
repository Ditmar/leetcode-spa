import { Box, Button, Typography, styled } from '@mui/material';

import { Popover } from './Popover';

import type { Decorator, Meta, StoryObj } from '@storybook/react';

const StoryTriggerButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  color: 'var(--foreground)',
  borderColor: 'var(--border)',
  backgroundColor: 'var(--background)',
  borderRadius: theme.spacing(1),
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  fontWeight: theme.typography.fontWeightMedium,

  '&:hover': {
    borderColor: 'var(--ring)',
    backgroundColor: 'var(--background)',
  },
}));

const CenterDecorator: Decorator = (Story) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100%">
      <Story />
    </Box>
  );
};

const meta: Meta<typeof Popover> = {
  title: 'component-catalog/Popover',
  component: Popover,
  decorators: [CenterDecorator],
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Primary: Story = {
  args: {
    trigger: <StoryTriggerButton variant="outlined">Open Popover</StoryTriggerButton>,
    children: (
      <Box>
        <Typography variant="subtitle1">Popover title</Typography>
        <Typography variant="body2">This is custom content inside the popover.</Typography>
      </Box>
    ),
    placement: 'bottom',
    showArrow: true,
  },
};

export const TopPlacement: Story = {
  args: {
    trigger: <StoryTriggerButton variant="outlined">Open Top</StoryTriggerButton>,
    children: <Typography variant="body2">Popover displayed on top.</Typography>,
    placement: 'top',
    showArrow: true,
  },
};

export const BottomStartPlacement: Story = {
  args: {
    trigger: <StoryTriggerButton variant="outlined">Open Bottom Start</StoryTriggerButton>,
    children: <Typography variant="body2">Popover aligned to bottom-start.</Typography>,
    placement: 'bottom-start',
    showArrow: true,
  },
};

export const BottomEndPlacement: Story = {
  args: {
    trigger: <StoryTriggerButton variant="outlined">Open Bottom End</StoryTriggerButton>,
    children: <Typography variant="body2">Popover aligned to bottom-end.</Typography>,
    placement: 'bottom-end',
    showArrow: true,
  },
};

export const LeftPlacement: Story = {
  args: {
    trigger: <StoryTriggerButton variant="outlined">Open Left</StoryTriggerButton>,
    children: <Typography variant="body2">Popover displayed on the left.</Typography>,
    placement: 'left',
    showArrow: true,
  },
};

export const RightPlacement: Story = {
  args: {
    trigger: <StoryTriggerButton variant="outlined">Open Right</StoryTriggerButton>,
    children: <Typography variant="body2">Popover displayed on the right.</Typography>,
    placement: 'right',
    showArrow: true,
  },
};

export const TopStartPlacement: Story = {
  args: {
    trigger: <StoryTriggerButton variant="outlined">Open Top Start</StoryTriggerButton>,
    children: <Typography variant="body2">Popover aligned to top-start.</Typography>,
    placement: 'top-start',
    showArrow: true,
  },
};

export const TopEndPlacement: Story = {
  args: {
    trigger: <StoryTriggerButton variant="outlined">Open Top End</StoryTriggerButton>,
    children: <Typography variant="body2">Popover aligned to top-end.</Typography>,
    placement: 'top-end',
    showArrow: true,
  },
};

export const WithoutArrow: Story = {
  args: {
    trigger: <StoryTriggerButton variant="outlined">Open Without Arrow</StoryTriggerButton>,
    children: <Typography variant="body2">Popover without arrow indicator.</Typography>,
    placement: 'bottom',
    showArrow: false,
  },
};
