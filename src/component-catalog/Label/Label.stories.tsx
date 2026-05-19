import React from 'react';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import type { Decorator, Meta, StoryObj } from '@storybook/react';

import Label from './Label';

const theme = createTheme();

/**
 * Shared Storybook decorator
 */
const withTheme = (Story: any) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />

    <Box
      sx={{
        p: 3,
        maxWidth: 480,
      }}
    >
      <Story />
    </Box>
  </ThemeProvider>
);

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  decorators: [withTheme],
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
      description: 'Displays required indicator',
    },
    optional: {
      control: 'boolean',
      description: 'Displays optional helper text',
    },
    error: {
      control: 'boolean',
      description: 'Applies error styling',
    },
    disabled: {
      control: 'boolean',
      description: 'Applies disabled styling',
    },
    tooltip: {
      control: 'text',
      description: 'Tooltip content (renders info icon when provided)',
    },
  },
  args: {
    htmlFor: 'label-default-input',
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

export const Default: Story = {
  args: {
    htmlFor: 'label-default',
  },
};

export const Required: Story = {
  args: {
    htmlFor: 'label-required',
    required: true,
  },
};

export const Optional: Story = {
  args: {
    htmlFor: 'label-optional',
    optional: true,
  },
};

export const Error: Story = {
  args: {
    htmlFor: 'label-error',
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    htmlFor: 'label-disabled',
    disabled: true,
  },
};

export const WithTooltip: Story = {
  args: {
    htmlFor: 'label-tooltip',
    tooltip: "We'll only use this to send your receipt.",
  },
};

export const RequiredErrorWithTooltip: Story = {
  args: {
    htmlFor: 'label-required-error-tooltip',
    children: 'Work email',
    required: true,
    error: true,
    tooltip: 'A valid email is required to proceed.',
  },
};


export const RequiredOverridesOptional: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'This story intentionally demonstrates an invalid prop combination to validate precedence behavior. The required state should override the optional state.',
      },
    },
  },
  args: {
    htmlFor: 'label-required-optional',
    children: 'Username',
    required: true,
    optional: true,
    tooltip: 'Required takes precedence over optional.',
  } as any,
};

export const PairedWithInput: Story = {
  render: (args) => (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 0.5,
      }}
    >
      <Label {...args} />

      <TextField
        id={args.htmlFor}
        size="small"
        placeholder="you@example.com"
        error={args.error}
        disabled={args.disabled}
        required={args.required}
        fullWidth
      />
    </Box>
  ),
  args: {
    htmlFor: 'label-paired-input',
    children: 'Email address',
    required: true,
  },
};

export const NarrowViewport: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Box
          sx={{
            width: 320,
            border: `1px dashed ${theme.palette.divider}`,
            p: theme.spacing(1),
          }}
        >
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
  args: {
    htmlFor: 'label-narrow-viewport',
    children: 'A very long label that might wrap on narrow screens',
    required: true,
    tooltip: 'Helpful tooltip content for this field',
  },
};

export const AllStates: Story = {
  render: () => (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      {/* Basic states */}
      <Box>
        <Label htmlFor="s1">Default</Label>
      </Box>

      <Box>
        <Label htmlFor="s2" required>
          Required
        </Label>
      </Box>

      <Box>
        <Label htmlFor="s3" optional>
          Optional
        </Label>
      </Box>

      {/* Validation states */}
      <Box>
        <Label htmlFor="s4" error>
          Error
        </Label>
      </Box>

      <Box>
        <Label htmlFor="s5" disabled>
          Disabled
        </Label>
      </Box>

      {/* Tooltip states */}
      <Box>
        <Label htmlFor="s6" tooltip="Extra context here">
          With Tooltip
        </Label>
      </Box>

      <Box>
        <Label htmlFor="s7" required error tooltip="Fix this field">
          Required + Error + Tooltip
        </Label>
      </Box>
    </Box>
  ),
};