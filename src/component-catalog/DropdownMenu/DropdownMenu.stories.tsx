import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';
import ShareIcon from '@mui/icons-material/Share';
import { Box, Button, Stack } from '@mui/material';

import DropdownMenu from './DropdownMenu';

import type { DropdownItem } from './DropdownMenu.types';

import type { Meta, StoryObj } from '@storybook/react';

const menuItems: DropdownItem[] = [
  {
    id: 'edit',
    label: 'Edit',
    icon: <EditIcon fontSize="small" />,
    shortcut: '⌘E',
  },
  {
    id: 'duplicate',
    label: 'Duplicate',
    icon: <ContentCopyIcon fontSize="small" />,
    shortcut: '⌘D',
  },
  {
    id: 'share',
    label: 'Share',
    icon: <ShareIcon fontSize="small" />,
  },
  {
    id: 'separator-1',
    type: 'separator',
  },
  {
    id: 'show-line-numbers',
    label: 'Show line numbers',
    type: 'checkbox',
    checked: true,
  },
  {
    id: 'word-wrap',
    label: 'Word wrap',
    type: 'checkbox',
    checked: false,
  },
  {
    id: 'separator-2',
    type: 'separator',
  },
  {
    id: 'sort-name',
    label: 'Sort by name',
    type: 'radio',
    name: 'sort',
    checked: true,
  },
  {
    id: 'sort-date',
    label: 'Sort by date',
    type: 'radio',
    name: 'sort',
    checked: false,
  },
  {
    id: 'sort-size',
    label: 'Sort by size',
    type: 'radio',
    name: 'sort',
    checked: false,
  },
  {
    id: 'separator-3',
    type: 'separator',
  },
  {
    id: 'settings',
    label: 'Settings',
    type: 'submenu',
    icon: <SettingsIcon fontSize="small" />,
    children: [
      { id: 'profile', label: 'Profile' },
      { id: 'preferences', label: 'Preferences' },
      { id: 'security', label: 'Security' },
    ],
  },
  {
    id: 'separator-4',
    type: 'separator',
  },
  {
    id: 'delete',
    label: 'Delete',
    icon: <DeleteIcon fontSize="small" />,
    disabled: true,
  },
];

const triggerButtonSx = {
  textTransform: 'none',
  fontWeight: 'var(--font-weight-normal)',
  fontSize: '0.875rem',
  borderRadius: 'var(--radius)',
  borderColor: 'var(--border)',
  color: 'var(--foreground)',
  backgroundColor: 'var(--background)',
  px: 2,
  minHeight: '2.25rem',
  '&:hover': {
    backgroundColor: 'var(--accent)',
    borderColor: 'var(--border)',
  },
};

const meta: Meta<typeof DropdownMenu> = {
  title: 'component-catalog/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
    docs: {
      disable: true,
    },
    viewport: {
      defaultViewport: 'responsive',
    },
  },
};

export default meta;

type Story = StoryObj<typeof DropdownMenu>;

const SinglePreview = () => {
  return (
    <Box
      sx={{
        width: '100%',
        minWidth: 0,
      }}
    >
      <Stack direction="column" spacing={2} alignItems="flex-start">
        <DropdownMenu
          trigger={
            <Button variant="outlined" sx={triggerButtonSx}>
              Dropdown Menu
            </Button>
          }
          items={menuItems}
          mobileFullWidth
        />

        <DropdownMenu
          trigger={
            <Button variant="outlined" sx={triggerButtonSx}>
              Right Click Me
            </Button>
          }
          items={menuItems}
          mobileFullWidth
        />
      </Stack>
    </Box>
  );
};

export const Playground: Story = {
  render: () => <SinglePreview />,
};
