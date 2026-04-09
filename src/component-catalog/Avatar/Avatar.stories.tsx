import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Avatar, { AvatarSection } from './Avatar';

const theme = createTheme();

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  /* Added decorator to provide MUI context in Storybook */
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'MD',
    size: 'md',
  },
};

export const CustomColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Avatar customVariant="primary">JD</Avatar>
      <Avatar customVariant="success">AB</Avatar>
    </div>
  ),
};

export const FullFigmaLayout: Story = {
  render: () => <AvatarSection />,
};