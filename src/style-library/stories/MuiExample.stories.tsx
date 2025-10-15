import MuiExample from './MuiExample';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/MuiExample',
  component: MuiExample,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MuiExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDarkBackground: Story = {
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#121212', minHeight: '100vh', padding: '1rem' }}>
        <Story />
      </div>
    ),
  ],
};
