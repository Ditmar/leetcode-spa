import { ThemeProvider } from '@mui/material/styles';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import theme from '../../style-library/theme/theme';

import { UpcomingQuizCard } from './UpcomingQuizCard';

describe('UpcomingQuizCard', () => {
  it('renders the title correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <UpcomingQuizCard
          title="Math Quiz"
          date="2023-08-12"
          description="Description here"
          onRegister={() => {}}
        />
      </ThemeProvider>
    );

    expect(screen.getByText('Math Quiz')).toBeInTheDocument();
  });

  it('renders the description if provided', () => {
    render(
      <ThemeProvider theme={theme}>
        <UpcomingQuizCard
          title="History Quiz"
          date="2023-08-12"
          description="Test description"
          onRegister={() => {}}
        />
      </ThemeProvider>
    );

    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('does not render description if not provided', () => {
    render(
      <ThemeProvider theme={theme}>
        <UpcomingQuizCard title="Science Quiz" date="2023-08-12" onRegister={() => {}} />
      </ThemeProvider>
    );

    expect(screen.queryByText(/Test description/i)).toBeNull();
  });

  it('renders the calendar icon', () => {
    render(
      <ThemeProvider theme={theme}>
        <UpcomingQuizCard title="Art Quiz" date="2023-08-12" onRegister={() => {}} />
      </ThemeProvider>
    );

    const avatar = screen.getByAltText('Calendar Icon');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('src', expect.stringContaining('Calendar'));
  });

  it('calls onRegister when the register button is clicked', () => {
    const handleRegister = vi.fn();

    render(
      <ThemeProvider theme={theme}>
        <UpcomingQuizCard
          title="Quiz"
          date="2023-08-12"
          description="Test description"
          onRegister={handleRegister}
        />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByTestId('register-button'));
    expect(handleRegister).toHaveBeenCalledTimes(1);
  });
});
