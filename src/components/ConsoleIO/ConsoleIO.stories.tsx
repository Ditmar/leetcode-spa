import MuiThemeProvider from '../../style-library/provider/MuiThemeProvider';

import { ConsoleIO } from './ConsoleIO';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ConsoleIO> = {
  title: 'Components/ConsoleIO',
  component: ConsoleIO,
  decorators: [
    (Story) => (
      <MuiThemeProvider>
        <div style={{ padding: 20, display: 'flex', justifyContent: 'center' }}>
          <Story />
        </div>
      </MuiThemeProvider>
    ),
  ],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    sampleValue: '',
    customValue: `2
6 3
0 5 5 6 6 6
8 2
0 0 1 1 2 2 2 2`,
    defaultTab: 'sample',
  },
};

export const BothFilled: Story = {
  args: {
    sampleValue: '',
    customValue: `2
6 3
0 5 5 6 6 6
8 2
0 0 1 1 2 2 2 2`,
    defaultTab: 'custom',
  },
};

export const LargeHeight: Story = {
  args: {
    sampleValue: '',
    customValue: `2
6 3
0 5 5 6 6 6
8 2
0 0 1 1 2 2 2 2`,
    height: 700,
  },
};

export const MobilePreview: Story = {
  args: {
    sampleValue: '',
    customValue: 'Mobile custom',
    width: '100%',
  },
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};
