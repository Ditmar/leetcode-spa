import { ThemeProvider } from '@mui/material/styles';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import theme from '../../style-library/theme/theme';

import { UpcomingQuizCard } from './UpcomingQuizCard';

describe('UpcomingQuizCard', () => {
  it('calls onRegister when button is clicked', () => {
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
