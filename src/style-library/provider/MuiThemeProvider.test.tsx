import { act, render, renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import MuiThemeProvider, { useThemeMode } from './MuiThemeProvider';

import type { ReactNode } from 'react';

describe('MuiThemeProvider', () => {
  beforeEach(() => {
    localStorage.clear();
    document.cookie = 'theme=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
    document.documentElement.className = '';
    document.documentElement.removeAttribute('data-theme');
  });

  it('provides default theme context', () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <MuiThemeProvider defaultMode="light">{children}</MuiThemeProvider>
    );

    const { result } = renderHook(() => useThemeMode(), { wrapper });

    expect(result.current.mode).toBe('light');
    expect(result.current.isDark).toBe(false);
  });

  it('updates mode and synchronizes documentElement and localStorage', () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <MuiThemeProvider defaultMode="light">{children}</MuiThemeProvider>
    );

    const { result } = renderHook(() => useThemeMode(), { wrapper });

    act(() => {
      result.current.setMode('dark');
    });

    expect(result.current.mode).toBe('dark');
    expect(result.current.isDark).toBe(true);
    expect(localStorage.getItem('theme')).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('renders children with theme baseline', () => {
    const { getByText } = render(
      <MuiThemeProvider defaultMode="light">
        <div>Theme Content</div>
      </MuiThemeProvider>
    );

    expect(getByText('Theme Content')).toBeTruthy();
  });
});
