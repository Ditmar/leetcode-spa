import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';
import Button from '@mui/material/Button';
import '@testing-library/jest-dom/vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import DropdownMenu from './DropdownMenu';
import type { DropdownItem } from './DropdownMenu.types';

const menuItems: DropdownItem[] = [
  {
    id: 'edit',
    label: 'Edit',
    icon: <EditIcon fontSize="small" />,
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
    id: 'settings',
    label: 'Settings',
    type: 'submenu',
    icon: <SettingsIcon fontSize="small" />,
    children: [
      {
        id: 'profile',
        label: 'Profile',
      },
      {
        id: 'preferences',
        label: 'Preferences',
      },
    ],
  },
];

describe('DropdownMenu', () => {
  it('opens the menu when the trigger is clicked', async () => {
    const user = userEvent.setup();

    render(<DropdownMenu trigger={<Button>Dropdown Menu</Button>} items={menuItems} />);

    expect(screen.queryByText('Edit')).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /dropdown menu/i }));

    expect(screen.getByText('Edit')).toBeInTheDocument();
  });

  it('closes the menu when clicking away', async () => {
    const user = userEvent.setup();

    render(
      <div>
        <button type="button">Outside</button>
        <DropdownMenu trigger={<Button>Dropdown Menu</Button>} items={menuItems} />
      </div>
    );

    await user.click(screen.getByRole('button', { name: /dropdown menu/i }));
    expect(screen.getByText('Edit')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /outside/i }));

    await waitFor(() => {
      expect(screen.queryByText('Edit')).not.toBeInTheDocument();
    });
  });

  it('calls onItemSelect when selecting a normal item', async () => {
    const user = userEvent.setup();
    const onItemSelect = vi.fn();

    render(
      <DropdownMenu
        trigger={<Button>Dropdown Menu</Button>}
        items={menuItems}
        onItemSelect={onItemSelect}
      />
    );

    await user.click(screen.getByRole('button', { name: /dropdown menu/i }));
    await user.click(screen.getByText('Edit'));

    expect(onItemSelect).toHaveBeenCalledTimes(1);
    expect(onItemSelect).toHaveBeenCalledWith(
      expect.objectContaining({
        id: 'edit',
        label: 'Edit',
      })
    );
  });

  it('supports keyboard navigation to open the menu', async () => {
    const user = userEvent.setup();

    render(<DropdownMenu trigger={<Button>Dropdown Menu</Button>} items={menuItems} />);

    const trigger = screen.getByRole('button', { name: /dropdown menu/i });
    trigger.focus();

    await user.keyboard('{Enter}');

    expect(screen.getByText('Edit')).toBeInTheDocument();
  });

  it('opens a submenu when hovering over a submenu item', async () => {
    const user = userEvent.setup();

    render(<DropdownMenu trigger={<Button>Dropdown Menu</Button>} items={menuItems} />);

    await user.click(screen.getByRole('button', { name: /dropdown menu/i }));

    const settingsItem = screen.getByText('Settings');
    fireEvent.mouseEnter(settingsItem);

    await waitFor(() => {
      expect(screen.getByText('Profile')).toBeInTheDocument();
      expect(screen.getByText('Preferences')).toBeInTheDocument();
    });
  });

  it('toggles checkbox items', async () => {
    const user = userEvent.setup();

    render(<DropdownMenu trigger={<Button>Dropdown Menu</Button>} items={menuItems} />);

    await user.click(screen.getByRole('button', { name: /dropdown menu/i }));

    const checkboxItem = screen.getByRole('menuitemcheckbox', {
      name: /show line numbers/i,
    });

    expect(checkboxItem).toHaveAttribute('aria-checked', 'true');

    await user.click(checkboxItem);

    expect(screen.getByRole('menuitemcheckbox', { name: /show line numbers/i })).toHaveAttribute(
      'aria-checked',
      'false'
    );
  });

  it('updates radio group selection', async () => {
    const user = userEvent.setup();

    render(<DropdownMenu trigger={<Button>Dropdown Menu</Button>} items={menuItems} />);

    await user.click(screen.getByRole('button', { name: /dropdown menu/i }));

    const sortName = screen.getByRole('menuitemradio', {
      name: /sort by name/i,
    });
    const sortDate = screen.getByRole('menuitemradio', {
      name: /sort by date/i,
    });

    expect(sortName).toHaveAttribute('aria-checked', 'true');
    expect(sortDate).toHaveAttribute('aria-checked', 'false');

    await user.click(sortDate);

    expect(screen.getByRole('menuitemradio', { name: /sort by name/i })).toHaveAttribute(
      'aria-checked',
      'false'
    );
    expect(screen.getByRole('menuitemradio', { name: /sort by date/i })).toHaveAttribute(
      'aria-checked',
      'true'
    );
  });
});
