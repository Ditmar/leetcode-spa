import { Box } from '@mui/material';

import { CodeEditor } from './CodeEditor';
import { createErrorResult, createSuccessResult } from './CodeEditor.utils';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CodeEditor> = {
  title: 'Component Catalog/CodeEditor',
  component: CodeEditor,

  decorators: [
    (Story) => (
      <Box
        sx={{
          width: '100%',
          height: '100dvh',

          display: 'grid',

          gridTemplateColumns: {
            xs: '1fr',
            md: '1fr 540px',
          },

          backgroundColor: 'var(--background)',
        }}
      >
        <Box
          sx={{
            display: {
              xs: 'none',
              md: 'block',
            },

            borderRight: '1px solid var(--border)',

            backgroundColor: 'var(--background)',
          }}
        />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',

            backgroundColor: 'var(--nav-bg)',

            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              width: '100%',

              maxWidth: '39.35rem',

              height: {
                xs: '100dvh',
                md: '52.4375rem',
              },

              overflow: 'hidden',
            }}
          >
            <Story />
          </Box>
        </Box>
      </Box>
    ),
  ],

  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof CodeEditor>;

export const Default: Story = {};

export const Running: Story = {
  args: {
    isRunning: true,
  },
};

export const Success: Story = {
  args: {
    result: createSuccessResult(),
  },
};

export const Error: Story = {
  args: {
    result: createErrorResult(),
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
