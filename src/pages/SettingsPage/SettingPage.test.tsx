import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';

import { SettingsPage } from './SettingsPage';

vi.mock('./SettingsPage.hook', () => {
  const mockUseSettingsPage = vi.fn();
  return {
    useSettingsPage: mockUseSettingsPage,
  };
});

const mockUseSettingsPage = vi.mocked((await import('./SettingsPage.hook')).useSettingsPage);

describe('SettingsPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockUseSettingsPage.mockReturnValue({
      preferences: {
        theme: 'light',
        language: 'en',
        notifications: true,
        privacy: { publicProfile: true, shareActivity: true, saveHistory: true },
      },
      isLoading: false,
      toggleTheme: vi.fn(),
      setNotifications: vi.fn(),
      setLanguage: vi.fn(),
      setPrivacySetting: vi.fn(),
    });
  });

  it('renders the settings page', () => {
    render(<SettingsPage />);
    expect(screen.getByText('Theme')).toBeInTheDocument();
  });
});
