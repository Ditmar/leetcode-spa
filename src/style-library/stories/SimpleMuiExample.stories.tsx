import MuiThemeProvider from '../provider/MuiThemeProvider';

import SimpleMuiExample from './SimpleMuiExample';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Theme/SimpleMuiExample',
  component: SimpleMuiExample,
  decorators: [
    (Story) => (
      <MuiThemeProvider>
        <Story />
      </MuiThemeProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SimpleMuiExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDarkBackground: Story = {
  decorators: [
    (Story) => (
      <MuiThemeProvider>
        <div style={{ backgroundColor: '#121212', minHeight: '100vh', padding: '1rem' }}>
          <Story />
        </div>
      </MuiThemeProvider>
    ),
  ],
};
