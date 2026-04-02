import { InputOTP } from './InputOTP';  

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof InputOTP> = {
  title: 'component-catalog/InputOTP',
  component: InputOTP,
  decorators: [
    (Story) => (
      <div
        style={{
          padding: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof InputOTP>;

export const Primary: Story = {
  args: {
    length: 6,
  },
};

export const Disabled: Story = {
  args: {
    length: 6,
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    length: 6,
    error: true,
  },
};