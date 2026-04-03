import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import '@testing-library/jest-dom';
import Command from './Command';

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

  it('opens dialog', () => {
    render(<Command groups={groups} />);
    fireEvent.click(screen.getByRole('button', { name: /open command palette/i }));
    expect(screen.getByPlaceholderText(/type a command or search/i)).toBeInTheDocument();
  });

  it('filters items', () => {
    render(<Command groups={groups} open />);
    const input = screen.getByPlaceholderText(/type a command or search/i);
    fireEvent.change(input, { target: { value: 'calendar' } });
    expect(screen.getByText('Calendar')).toBeInTheDocument();
  });

  it('shows empty state', () => {
    render(<Command groups={groups} open />);
    const input = screen.getByPlaceholderText(/type a command or search/i);
    fireEvent.change(input, { target: { value: 'xxxxx' } });
    expect(screen.getByText(/no results found/i)).toBeInTheDocument();
  });
});
