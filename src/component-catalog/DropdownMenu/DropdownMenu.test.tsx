import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';
import Button from '@mui/material/Button';
import '@testing-library/jest-dom/vitest';
import { render, screen, waitFor } from '@testing-library/react';
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

const renderDropdownMenu = (onItemSelect?: (item: DropdownItem) => void) => {
  render(
    <DropdownMenu
      trigger={<Button>Dropdown Menu</Button>}
      items={menuItems}
      onItemSelect={onItemSelect}
    />
  );
};

const getDropdownTrigger = () => {
  return screen.getByRole('button', { name: /dropdown menu/i });
};

describe('DropdownMenu', () => {
  it('opens the menu when the trigger is clicked', async () => {
    const user = userEvent.setup();

    renderDropdownMenu();

    const trigger = getDropdownTrigger();

    expect(trigger).toHaveAttribute('aria-expanded', 'false');

    await user.click(trigger);

    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('menu', { name: /dropdown menu/i })).toBeInTheDocument();
    expect(screen.getByText('Edit')).toBeInTheDocument();
  });

  it('sets correct ARIA attributes and roles', async () => {
    const user = userEvent.setup();

    renderDropdownMenu();

    const trigger = getDropdownTrigger();

    expect(trigger).toHaveAttribute('aria-haspopup', 'menu');
    expect(trigger).toHaveAttribute('aria-expanded', 'false');

    await user.click(trigger);

    expect(trigger).toHaveAttribute('aria-expanded', 'true');

    expect(screen.getByRole('menu', { name: /dropdown menu/i })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: /edit/i })).toBeInTheDocument();

    expect(
      screen.getByRole('menuitemcheckbox', {
        name: /show line numbers/i,
      })
    ).toHaveAttribute('aria-checked', 'true');

    expect(
      screen.getByRole('menuitemradio', {
        name: /sort by name/i,
      })
    ).toHaveAttribute('aria-checked', 'true');

    expect(
      screen.getByRole('menuitemradio', {
        name: /sort by date/i,
      })
    ).toHaveAttribute('aria-checked', 'false');
  });

  it('closes the menu when pressing escape', async () => {
    const user = userEvent.setup();

    renderDropdownMenu();

    const trigger = getDropdownTrigger();

    await user.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');

    await user.keyboard('{Escape}');

    await waitFor(() => {
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });
  });

  it('calls onItemSelect when selecting a normal item', async () => {
    const user = userEvent.setup();
    const onItemSelect = vi.fn();

    renderDropdownMenu(onItemSelect);

    await user.click(getDropdownTrigger());
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

    renderDropdownMenu();

    const trigger = getDropdownTrigger();
    trigger.focus();

    await user.keyboard('{Enter}');

    expect(screen.getByText('Edit')).toBeInTheDocument();
  });

  it('opens a submenu when hovering over a submenu item', async () => {
    const user = userEvent.setup();

    renderDropdownMenu();

    await user.click(getDropdownTrigger());

    const settingsItem = screen.getByText('Settings');
    await user.hover(settingsItem);

    await waitFor(() => {
      expect(screen.getByText('Profile')).toBeInTheDocument();
      expect(screen.getByText('Preferences')).toBeInTheDocument();
    });
  });

  it('toggles checkbox items', async () => {
    const user = userEvent.setup();

    renderDropdownMenu();

    await user.click(getDropdownTrigger());

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

    renderDropdownMenu();

    await user.click(getDropdownTrigger());

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
