import { Button } from '@mui/material';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, beforeEach, vi } from 'vitest';

import MuiThemeProvider, { useThemeMode } from './MuiThemeProvider';

function ThemeModeTestComponent() {
  const { mode, resolvedMode, toggleMode, setMode } = useThemeMode();

  return (
    <div>
      <span data-testid="mode">{mode}</span>
      <span data-testid="resolved-mode">{resolvedMode}</span>

      <Button onClick={toggleMode}>Toggle theme</Button>
      <Button onClick={() => setMode('dark')}>Set dark</Button>
      <Button onClick={() => setMode('light')}>Set light</Button>
      <Button onClick={() => setMode('system')}>Set system</Button>
    </div>
  );
}

describe('MuiThemeProvider', () => {
  beforeEach(() => {
    localStorage.clear();

    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        addListener: vi.fn(),
        removeListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  it('uses system mode by default', () => {
    render(
      <MuiThemeProvider>
        <ThemeModeTestComponent />
      </MuiThemeProvider>
    );

    expect(screen.getByTestId('mode')).toHaveTextContent('system');
    expect(screen.getByTestId('resolved-mode')).toHaveTextContent('light');
  });

  it('loads saved theme mode from localStorage', () => {
    localStorage.setItem('theme-mode', 'dark');

    render(
      <MuiThemeProvider>
        <ThemeModeTestComponent />
      </MuiThemeProvider>
    );

    expect(screen.getByTestId('mode')).toHaveTextContent('dark');
    expect(screen.getByTestId('resolved-mode')).toHaveTextContent('dark');
  });

  it('persists theme mode changes in localStorage', () => {
    render(
      <MuiThemeProvider>
        <ThemeModeTestComponent />
      </MuiThemeProvider>
    );

    fireEvent.click(screen.getByText('Set dark'));

    expect(localStorage.getItem('theme-mode')).toBe('dark');
    expect(screen.getByTestId('mode')).toHaveTextContent('dark');
    expect(screen.getByTestId('resolved-mode')).toHaveTextContent('dark');
  });

  it('toggles between light and dark mode', () => {
    render(
      <MuiThemeProvider>
        <ThemeModeTestComponent />
      </MuiThemeProvider>
    );

    fireEvent.click(screen.getByText('Toggle theme'));

    expect(localStorage.getItem('theme-mode')).toBe('dark');
    expect(screen.getByTestId('resolved-mode')).toHaveTextContent('dark');

    fireEvent.click(screen.getByText('Toggle theme'));

    expect(localStorage.getItem('theme-mode')).toBe('light');
    expect(screen.getByTestId('resolved-mode')).toHaveTextContent('light');
  });
});
