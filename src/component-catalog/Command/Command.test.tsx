import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import '@testing-library/jest-dom';
import { Command } from './Command';

const groups = [
  {
    id: 'suggestions',
    heading: 'Suggestions',
    items: [
      { id: 'calendar', label: 'Calendar', keywords: ['date'] },
      { id: 'emoji', label: 'Search Emoji', keywords: ['emoji'] },
    ],
  },
];

describe('Command', () => {
  it('renders title', () => {
    render(<Command groups={groups} />);
    expect(screen.getByText('Command')).toBeInTheDocument();
  });

  it('opens dialog', async () => {
    const user = userEvent.setup();
    render(<Command groups={groups} />);
    await user.click(screen.getByRole('button', { name: /open command palette/i }));
    expect(screen.getByPlaceholderText(/type a command or search/i)).toBeInTheDocument();
  });

  it('filters items', async () => {
    const user = userEvent.setup();
    render(<Command groups={groups} open />);
    const input = screen.getByPlaceholderText(/type a command or search/i);
    await user.type(input, 'calendar');
    expect(screen.getByText('Calendar')).toBeInTheDocument();
  });

  it('shows empty state', async () => {
    const user = userEvent.setup();
    render(<Command groups={groups} open />);
    const input = screen.getByPlaceholderText(/type a command or search/i);
    await user.type(input, 'xxxxx');
    expect(screen.getByText(/no results found/i)).toBeInTheDocument();
  });

  it('navigates with keyboard and triggers onSelect', async () => {
    const user = userEvent.setup();
    const onSelectMock = vi.fn();

    const customGroups = [
      {
        id: 'suggestions',
        heading: 'Suggestions',
        items: [
          { id: '1', label: 'Item 1', onSelect: onSelectMock },
          { id: '2', label: 'Item 2' },
        ],
      },
    ];

    render(<Command groups={customGroups} open />);
    const input = screen.getByPlaceholderText(/type a command or search/i);

    await user.click(input);
    await user.keyboard('{ArrowDown}');
    await user.keyboard('{ArrowUp}');
    await user.keyboard('{Enter}');
    expect(onSelectMock).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when Escape is pressed', async () => {
    const user = userEvent.setup();
    const onCloseMock = vi.fn();
    render(<Command groups={groups} open onClose={onCloseMock} />);
    const input = screen.getByPlaceholderText(/type a command or search/i);
    await user.click(input);
    await user.keyboard('{Escape}');
    expect(onCloseMock).toHaveBeenCalled();
  });
});
