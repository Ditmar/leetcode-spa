import { ThemeProvider, createTheme } from '@mui/material/styles';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { UpcomingQuizCard } from './UpcomingQuizCard';

const mockTheme = createTheme({
  palette: {
    primary: { main: '#1976d2', contrastText: '#fff' },
    gradients: {
      register: '#B33DEB',
      registerHover: '#A030D9',
    },
    background: { paper: '#fff' },
  },
  spacing: 8,
});

describe('UpcomingQuizCard', () => {
  it('renders the title', () => {
    render(
      <ThemeProvider theme={mockTheme}>
        <UpcomingQuizCard title="Sample Quiz" date="2023-08-12" onRegister={vi.fn()} />
      </ThemeProvider>
    );
    expect(screen.getByText('Sample Quiz')).toBeInTheDocument();
  });

  it('renders the description if provided', () => {
    render(
      <ThemeProvider theme={mockTheme}>
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

  it('calls onRegister when register button is clicked', () => {
    const handleRegister = vi.fn();
    render(
      <ThemeProvider theme={mockTheme}>
        <UpcomingQuizCard title="Sample Quiz" date="2023-08-12" onRegister={handleRegister} />
      </ThemeProvider>
    );
    fireEvent.click(screen.getByTestId('register-button'));
    expect(handleRegister).toHaveBeenCalledTimes(1);
  });
});
