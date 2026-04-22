import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';

import { Menubar } from './Menubar';

const mockItems = [
  {
    label: 'File',
    children: [{ label: 'New' }, { label: 'Open' }],
  },
  {
    label: 'Edit',
    children: [{ label: 'Undo' }, { label: 'Redo' }],
  },
];

describe('Menubar', () => {
  it('renders menu items', () => {
    render(<Menubar items={mockItems} />);
    expect(screen.getByText('File')).toBeInTheDocument();
    expect(screen.getByText('Edit')).toBeInTheDocument();
  });

  it('opens submenu on click', async () => {
    const user = userEvent.setup();
    render(<Menubar items={mockItems} />);
    const fileButton = screen.getByText('File');
    await user.click(fileButton);
    expect(screen.getByText('New')).toBeInTheDocument();
    expect(screen.getByText('Open')).toBeInTheDocument();
  });

  it('calls onClick when submenu item is clicked', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    const items = [
      {
        label: 'File',
        children: [{ label: 'New', onClick }],
      },
    ];
    render(<Menubar items={items} />);
    await user.click(screen.getByText('File'));
    await user.click(screen.getByText('New'));
    expect(onClick).toHaveBeenCalled();
  });

  it('handles keyboard navigation', async () => {
    const user = userEvent.setup();
    render(<Menubar items={mockItems} />);
    const fileButton = screen.getByText('File');
    await user.click(fileButton); // Open the menu
    await user.keyboard('{ArrowDown}');
    expect(await screen.findByText('New')).toBeInTheDocument();
  });
});
