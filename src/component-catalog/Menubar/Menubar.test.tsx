import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { Menubar } from './Menubar';

const mockItems = [
  {
    label: 'File',
    children: [
      { label: 'New' },
      { label: 'Open' },
    ],
  },
  {
    label: 'Edit',
    children: [
      { label: 'Undo' },
      { label: 'Redo' },
    ],
  },
];

describe('Menubar', () => {
  it('renders menubar with items', () => {
    render(<Menubar items={mockItems} />);

    expect(screen.getByText('File')).toBeInTheDocument();
    expect(screen.getByText('Edit')).toBeInTheDocument();
  });

  it('opens dropdown menu on click (desktop)', () => {
    render(<Menubar items={mockItems} />);

    const fileButton = screen.getByText('File');
    fireEvent.click(fileButton);

    expect(screen.getByText('New')).toBeInTheDocument();
    expect(screen.getByText('Open')).toBeInTheDocument();
  });

  it('handles submenu item click', () => {
    const onClick = vi.fn();

    const items = [
      {
        label: 'File',
        children: [
          { label: 'New', onClick },
        ],
      },
    ];

    render(<Menubar items={items} />);

    fireEvent.click(screen.getByText('File'));
    fireEvent.click(screen.getByText('New'));

    expect(onClick).toHaveBeenCalled();
  });

  it('renders hamburger button on mobile', () => {
    // Mock matchMedia
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: true,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    render(<Menubar items={mockItems} />);

    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  it('opens drawer on hamburger click', () => {
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: true,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    render(<Menubar items={mockItems} />);

    const button = screen.getByLabelText('Open menu');
    fireEvent.click(button);

    expect(screen.getByText('File')).toBeInTheDocument();
  });
});