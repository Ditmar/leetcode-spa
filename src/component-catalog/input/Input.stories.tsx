import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';


import { Input } from './Input';



const meta: Meta<typeof Input> = {
  title: 'component-catalog/Input',
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Basic: Story = {
  args: {
    label: '',
    placeholder: 'email@example.com',
  },
};

export const ErrorState: Story = {
  args: {
    label: '',
    error: true,
    helperText: 'Required',
  },
};

export const Disabled: Story = {
  args: {
    label: '',
    disabled: true,
  },
};

export const CharacterCount: Story = {
  args: {
    label: '',
    maxLength: 20,
    showCharacterCount: true,
    defaultValue: 'Hello',
  },
};

export const ResponsiveShowcase: Story = {
  render: () => (
    <Box
      sx={(theme) => ({
        width: '100%',
        maxWidth: theme.breakpoints.values.lg,
        mx: 'auto',
        p: 3,
        border: '0.0625rem solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        backgroundColor: 'var(--card)',
})}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 3,
        }}
      >
        <Input type="email" placeholder="email@example.com" />

        <Input type="password" placeholder="••••••••" />

        <Input type="search" placeholder="Search..." startAdornment={<SearchIcon />} />

        <Input disabled placeholder="Disabled" />

        <Box sx={{ gridColumn: { xs: 'auto', md: '1 / -1' } }}>
          <Input multiline minRows={4} placeholder="Tell us about yourself..." />
        </Box>
      </Box>
    </Box>
  ),
};
