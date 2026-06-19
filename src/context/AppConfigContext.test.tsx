import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { AppProvider } from './AppConfigContext';
import { useAppConfig } from './useAppConfig';
import { useCurrentUser } from './useCurrentUser';

import type { PublicConfig } from '@/config/env.types';
import type { AuthUser } from '@/services/auth/authService.types';

const mockConfig: PublicConfig = {
  apiBaseUrl: 'http://localhost:3000',
  featureFlags: {
    contests: true,
    explore: false,
  },
} as PublicConfig;

const mockUser: AuthUser = {
  id: '123',
  username: 'testuser',
  email: 'test@example.com',
  avatarUrl: 'https://example.com/avatar.jpg',
  role: 'user',
};

describe('AppConfigContext', () => {
  describe('useAppConfig returns injected config', () => {
    it('should return the config passed to AppProvider', () => {
      let capturedConfig: PublicConfig | null = null;

      function TestComponent() {
        const config = useAppConfig();
        capturedConfig = config;
        return <div>Config loaded</div>;
      }

      render(
        <AppProvider config={mockConfig} user={null}>
          <TestComponent />
        </AppProvider>
      );

      expect(capturedConfig).toEqual(mockConfig);
      expect(screen.getByText('Config loaded')).toBeInTheDocument();
    });
  });

  describe('useCurrentUser returns unauthenticated state', () => {
    it('should return user: null and isAuthenticated: false when no user is injected', () => {
      let capturedState = { user: null, isAuthenticated: false };

      function TestComponent() {
        const { user, isAuthenticated } = useCurrentUser();
        capturedState = { user, isAuthenticated };
        return <div>Auth checked</div>;
      }

      render(
        <AppProvider config={mockConfig} user={null}>
          <TestComponent />
        </AppProvider>
      );

      expect(capturedState.user).toBeNull();
      expect(capturedState.isAuthenticated).toBe(false);
    });
  });

  describe('useCurrentUser returns authenticated state', () => {
    it('should return user and isAuthenticated: true when user exists', () => {
      let capturedState = { user: null, isAuthenticated: false };

      function TestComponent() {
        const { user, isAuthenticated } = useCurrentUser();
        capturedState = { user, isAuthenticated };
        return <div>User logged in</div>;
      }

      render(
        <AppProvider config={mockConfig} user={mockUser}>
          <TestComponent />
        </AppProvider>
      );

      expect(capturedState.user).toEqual(mockUser);
      expect(capturedState.isAuthenticated).toBe(true);
    });
  });

  describe('Provider guard', () => {
    it('should throw error when useAppConfig is called outside AppProvider', () => {
      function TestComponent() {
        useAppConfig();
        return <div>Should not render</div>;
      }

      const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

      expect(() => render(<TestComponent />)).toThrow(
        'useAppContext must be used inside <AppProvider>'
      );

      consoleErrorSpy.mockRestore();
    });
  });

  describe('Feature flags', () => {
    it('should expose featureFlags through useAppConfig and preserve injected values', () => {
      let capturedFeatureFlags: Record<string, unknown> | null = null;

      function TestComponent() {
        const config = useAppConfig();
        capturedFeatureFlags = config.featureFlags;
        return <div>Feature flags loaded</div>;
      }

      render(
        <AppProvider config={mockConfig} user={null}>
          <TestComponent />
        </AppProvider>
      );

      expect(capturedFeatureFlags).toEqual({
        contests: true,
        explore: false,
      });
    });

    it('should allow conditional rendering based on feature flags', () => {
      function ContestsSection() {
        const config = useAppConfig();
        return config.featureFlags.contests ? <div>Contests Available</div> : null;
      }

      function ExploreSection() {
        const config = useAppConfig();
        return config.featureFlags.explore ? <div>Explore Available</div> : null;
      }

      render(
        <AppProvider config={mockConfig} user={null}>
          <ContestsSection />
          <ExploreSection />
        </AppProvider>
      );

      expect(screen.getByText('Contests Available')).toBeInTheDocument();
      expect(screen.queryByText('Explore Available')).not.toBeInTheDocument();
    });
  });
});
