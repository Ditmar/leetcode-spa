import type { Meta, StoryObj } from '@storybook/react';
import TestHeader from './TestHeader';
import tcsLogo from './assets/tcs-logo.svg';

const meta: Meta<typeof TestHeader> = {
  title: 'Components/TestHeader',
  component: TestHeader,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '16px', backgroundColor: '#f5f5f5' }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof TestHeader>;

export const Default: Story = {
  args: {
    logoSrc: tcsLogo,
    title: 'TCS Quiz Competition',
    subtitle: 'TCS Campus Drive-2023',
    size: 'medium',
  },
};

export const Vertical: Story = {
  args: {
    logoSrc: tcsLogo,
    title: 'Vertical Layout',
    subtitle: 'Stacked version',
    variant: 'vertical',
    size: 'medium',
  },
};

export const LongTitle: Story = {
  args: {
    logoSrc: tcsLogo,
    title: 'This is a very long quiz name to test responsiveness and overflow handling in the header component',
    subtitle: 'This is a longer subtitle to test wrapping behavior.',
    size: 'medium',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    size: 'medium',
  },
};

export const SmallLogo: Story = {
  args: {
    logoSrc: tcsLogo,
    title: 'Small Logo',
    subtitle: 'Small Logo Subtitle',
    size: 'small',
  },
};

export const LargeLogo: Story = {
  args: {
    logoSrc: tcsLogo,
    title: 'Large Logo',
    subtitle: 'Large Logo Subtitle',
    size: 'large',
  },
};

export const NoLogo: Story = {
  args: {
    logoSrc: '',
    title: 'No Logo Header',
    subtitle: 'No Logo Subtitle',
    size: 'medium',
  },
};

