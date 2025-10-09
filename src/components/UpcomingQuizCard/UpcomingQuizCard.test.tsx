import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import UpcomingQuizCard from './UpcomingQuizCard';

describe('UpcomingQuizCard', () => {
  it('renders title and formatted date', () => {
    render(<UpcomingQuizCard title="Quiz" date="2023-08-12" onRegister={() => {}} />);
    expect(screen.getByText('Quiz')).toBeInTheDocument();
    expect(screen.getByTestId('quiz-date')).toHaveTextContent('12 Aug, 2023');
  });

  it('calls onRegister when button is clicked', () => {
    const handleRegister = vi.fn();
    render(<UpcomingQuizCard title="Quiz" date="2023-08-12" onRegister={handleRegister} />);
    fireEvent.click(screen.getByTestId('register-button'));
    expect(handleRegister).toHaveBeenCalledTimes(1);
  });
});
