import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import TestExecutionPage from './TestExecutionPage';

import type { Meta, StoryObj } from '@storybook/react';

const theme = createTheme();

const meta: Meta<typeof TestExecutionPage> = {
  title: 'Pages/TestExecutionPage',
  component: TestExecutionPage,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Box sx={{ minHeight: '100vh' }}>
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof TestExecutionPage>;

export const MultipleChoiceAndCode: Story = {
  args: {
    testId: 'sample-test',
  },
};

export const MobileView: Story = {
  args: {
    testId: 'sample-test',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
