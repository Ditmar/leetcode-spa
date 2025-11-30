import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { UpcomingQuizCard } from './UpcomingQuizCard';

describe('UpcomingQuizCard', () => {
  it('renders the title', () => {
    render(<UpcomingQuizCard title="Sample Quiz" date="2023-08-12" onRegister={vi.fn()} />);
    expect(screen.getByText('Sample Quiz')).toBeInTheDocument();
  });

  it('renders the description if provided', () => {
    render(
      <UpcomingQuizCard
        title="Sample Quiz"
        date="2023-08-12"
        description="This is a test description"
        onRegister={vi.fn()}
      />
    );
    expect(screen.getByText('This is a test description')).toBeInTheDocument();
  });

  it('calls onRegister when register button is clicked', () => {
    const handleRegister = vi.fn();
    render(<UpcomingQuizCard title="Sample Quiz" date="2023-08-12" onRegister={handleRegister} />);
    fireEvent.click(screen.getByTestId('register-button'));
    expect(handleRegister).toHaveBeenCalledTimes(1);
  });
});
