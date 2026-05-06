import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import React from 'react';

import Label from './Label';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Label> = {
  title: 'Atoms/Label',
  component: Label,
  decorators: [
    (Story) => (
      <ThemeProvider theme={createTheme()}>
        <CssBaseline />
        <Box sx={{ p: 3, maxWidth: 480 }}>
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
  argTypes: {
    children: {
      control: 'text',
      description: 'Visible label text',
    },
    htmlFor: {
      control: 'text',
      description: 'ID of the associated input element',
    },
    required: {
      control: 'boolean',
    },
    optional: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    tooltip: {
      control: 'text',
      description: 'Tooltip content (shows info icon when provided)',
    },
  },
  args: {
    htmlFor: 'demo-input',
    children: 'Email address',
    required: false,
    optional: false,
    error: false,
    disabled: false,
    tooltip: '',
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const Optional: Story = {
  args: {
    optional: true,
  },
};

export const Error: Story = {
  args: {
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithTooltip: Story = {
  args: {
    tooltip: "We'll only use this to send your receipt.",
  },
};

export const RequiredErrorWithTooltip: Story = {
  args: {
    children: 'Work email',
    required: true,
    error: true,
    tooltip: 'A valid email is required to proceed.',
  },
};

export const PairedWithInput: Story = {
  render: (args) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
      <Label {...args} />
      <TextField
        id={args.htmlFor}
        size="small"
        placeholder="you@example.com"
        error={args.error}
        disabled={args.disabled}
        inputProps={{
          'aria-required': args.required,
        }}
        fullWidth
      />
    </Box>
  ),
  args: {
    children: 'Email address',
    htmlFor: 'demo-input',
    required: true,
  },
};

export const NarrowViewport: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={createTheme()}>
        <CssBaseline />
        <Box
          sx={{
            width: 320,
            border: '1px dashed grey',
            p: 1,
          }}
        >
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
  args: {
    children: 'A very long label that might wrap on narrow screens',
    required: true,
    tooltip: 'Helpful tooltip content for this field',
  },
};

export const AllStates: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Label htmlFor="s1">Default</Label>

      <Label htmlFor="s2" required>
        Required
      </Label>

      <Label htmlFor="s3" optional>
        Optional
      </Label>

      <Label htmlFor="s4" error>
        Error
      </Label>

      <Label htmlFor="s5" disabled>
        Disabled
      </Label>

      <Label htmlFor="s6" tooltip="Extra context here">
        With Tooltip
      </Label>

      <Label htmlFor="s7" required error tooltip="Fix this field">
        Required + Error + Tooltip
      </Label>
    </Box>
  ),
};
