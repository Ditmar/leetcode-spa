import { ThemeProvider } from '@mui/material/styles';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import theme from '../../style-library/theme/theme';

import { UpcomingQuizCard } from './UpcomingQuizCard';

describe('UpcomingQuizCard', () => {
  it('renders the title correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <UpcomingQuizCard title="Sample Quiz" date="2023-08-12" onRegister={vi.fn()} />
      </ThemeProvider>
    );
    expect(screen.getByText('Sample Quiz')).toBeInTheDocument();
  });

  it('renders the description if provided', () => {
    render(
      <ThemeProvider theme={theme}>
        <UpcomingQuizCard
          title="Sample Quiz"
          date="2023-08-12"
          description="This is a test description"
          onRegister={vi.fn()}
        />
      </ThemeProvider>
    );
    expect(screen.getByText('This is a test description')).toBeInTheDocument();
  });

  it('does not render description if not provided', () => {
    render(
      <ThemeProvider theme={theme}>
        <UpcomingQuizCard title="Sample Quiz" date="2023-08-12" onRegister={vi.fn()} />
      </ThemeProvider>
    );
    const desc = screen.queryByText('This is a test description');
    expect(desc).not.toBeInTheDocument();
  });

  it('renders the calendar icon', () => {
    render(
      <ThemeProvider theme={theme}>
        <UpcomingQuizCard title="Sample Quiz" date="2023-08-12" onRegister={vi.fn()} />
      </ThemeProvider>
    );
    const img = screen.getByAltText('Calendar Icon') as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain('Calendar.png'); // ajusta el nombre según tu import
  });

  it('calls onRegister when register button is clicked', () => {
    const handleRegister = vi.fn();
    render(
      <ThemeProvider theme={theme}>
        <UpcomingQuizCard title="Sample Quiz" date="2023-08-12" onRegister={handleRegister} />
      </ThemeProvider>
    );
    fireEvent.click(screen.getByTestId('register-button'));
    expect(handleRegister).toHaveBeenCalledTimes(1);
  });
});
