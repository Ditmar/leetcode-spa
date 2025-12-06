import { Box, useTheme } from '@mui/material';

import { SearchBar } from './SearchBar';

import type { PropsSearchBar } from './SearchBar.types';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SearchBar> = {
  title: 'Components/SearchBar',
  component: SearchBar,
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text' },
    defaultValue: { control: 'text' },
    disabled: { control: 'boolean' },
    autoSearch: { control: 'boolean' },
    debounceDelay: { control: { type: 'number', min: 0, max: 2000, step: 100 } },
    buttonAriaLabel: { control: 'text' },
    inputAriaLabel: { control: 'text' },
    onSearch: { action: 'searched' },
    onChange: { action: 'changed' },
  },
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {
    placeholder: 'Search...',
    disabled: false,
    autoSearch: false,
    debounceDelay: 300,
    buttonAriaLabel: 'Search',
    inputAriaLabel: 'Search content',
  } as PropsSearchBar,
};

export const WithAutoSearch: Story = {
  args: {
    ...Default.args,
    autoSearch: true,
  },
};

export const WithDefaultValue: Story = {
  args: {
    ...Default.args,
    defaultValue: 'Initial search term',
  },
};

export const Controlled: Story = {
  args: {
    ...Default.args,
  },
};

export const CustomDebounce: Story = {
  args: {
    ...Default.args,
    autoSearch: true,
    debounceDelay: 1000,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const MobileLayout: Story = {
  args: {
    ...Default.args,
    placeholder: 'Search articles...',
  },
  decorators: [
    (Story) => {
      const theme = useTheme();
      return (
        <Box
          sx={{
            maxWidth: 320,
            mx: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing(1.5),
          }}
        >
          <Story />
        </Box>
      );
    },
  ],
};

export const DesktopLayout: Story = {
  args: {
    ...Default.args,
    placeholder: 'Search across all documents...',
  },
  decorators: [
    (Story) => {
      const theme = useTheme();
      return (
        <Box
          sx={{
            width: '100%',
            maxWidth: 600,
            mx: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing(2),
            padding: theme.spacing(3),
            backgroundColor: theme.palette.background.default,
            borderRadius: Number(theme.shape.borderRadius) * 2,
          }}
        >
          <Story />
        </Box>
      );
    },
  ],
};
