import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { AppProvider } from './AppConfigContext';
import { useAppConfig } from './useAppConfig';
import { useCurrentUser } from './useCurrentUser';

import type { AuthUser } from '../services/auth/authService.types';
import type { AppConfig, PublicConfig } from '../utils/config.types';

const mockConfig: AppConfig = {
  defaultCacheTTL: 300000,
  basePath: '/app',
  navShell: [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'problems', label: 'Problems', href: '/problems' },
  ],
};

const mockUser: AuthUser = {
  id: '1234',
  username: 'testuser',
  email: 'test@example.com',
  role: 'user',
};

describe('AppConfigContext', () => {
  describe('useAppConfig returns injected config', () => {
    it('should return the config passed to AppProvider', async () => {
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

      await screen.findByText('Config loaded');
      expect(capturedConfig).toEqual(mockConfig);
    });
  });

  describe('useCurrentUser returns unauthenticated state', () => {
    it('should return user: null and isAuthenticated: false when no user is injected', async () => {
      let capturedState: { user: AuthUser | null; isAuthenticated: boolean } = {
        user: null,
        isAuthenticated: false,
      };

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

      await screen.findByText('Auth checked');
      expect(capturedState.user).toBeNull();
      expect(capturedState.isAuthenticated).toBe(false);
    });
  });

  describe('useCurrentUser returns authenticated state', () => {
    it('should return user and isAuthenticated: true when user exists', async () => {
      let capturedState: { user: AuthUser | null; isAuthenticated: boolean } = {
        user: null,
        isAuthenticated: false,
      };

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

      await screen.findByText('User logged in');
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
    it('should not show the debug panel by default', async () => {
      render(
        <AppProvider user={null}>
          <div>Debug panel test</div>
        </AppProvider>
      );

      expect(screen.queryByLabelText('AppConfigContext status')).not.toBeInTheDocument();
    });

    it('should show the debug panel only when the development debug flag is enabled', async () => {
      vi.stubEnv('VITE_APP_CONFIG_DEBUG', 'true');

      render(
        <AppProvider user={null}>
          <div>Debug panel test</div>
        </AppProvider>
      );

      expect(await screen.findByLabelText('AppConfigContext status')).toBeInTheDocument();
      vi.unstubAllEnvs();
    });

    it('should allow an explicit showDebug=false to suppress the panel even when the env flag is enabled', async () => {
      vi.stubEnv('VITE_APP_CONFIG_DEBUG', 'true');

      render(
        <AppProvider user={null} showDebug={false}>
          <div>Debug panel override test</div>
        </AppProvider>
      );

      expect(screen.queryByLabelText('AppConfigContext status')).not.toBeInTheDocument();
      vi.unstubAllEnvs();
    });

    it('should expose safe public defaults when AppProvider is used without config props', async () => {
      let capturedConfig: PublicConfig | null = null;

      function TestComponent() {
        const config = useAppConfig();
        capturedConfig = config;
        return <div>Default config loaded</div>;
      }

      render(<AppProvider user={null}>{<TestComponent />}</AppProvider>);

      await screen.findByText('Default config loaded');
      const safeConfig = capturedConfig as PublicConfig | null;
      expect(capturedConfig).toEqual({ defaultCacheTTL: 0, basePath: '', navShell: [] });
      expect(safeConfig?.defaultCacheTTL).toBe(0);
      expect(safeConfig?.basePath).toBe('');
      expect(safeConfig?.navShell).toEqual([]);
      expect(capturedConfig).not.toHaveProperty('jwtSecret');
      expect(capturedConfig).not.toHaveProperty('__contextVersion');
    });

    it('should not expose __contextVersion in the returned config', async () => {
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

      await screen.findByText('Config loaded');
      expect(capturedConfig).not.toHaveProperty('__contextVersion');
    });

    it('should sanitize injected config and drop non-public fields', async () => {
      let capturedConfig: PublicConfig | null = null;

      const injectedConfig = {
        ...mockConfig,
        jwtSecret: 'super-secret',
        __contextVersion: 'v2',
      } as unknown as AppConfig;

      function TestComponent() {
        const config = useAppConfig();
        capturedConfig = config;
        return <div>Sanitized config loaded</div>;
      }

      render(
        <AppProvider config={injectedConfig} user={null}>
          <TestComponent />
        </AppProvider>
      );

      await screen.findByText('Sanitized config loaded');
      expect(capturedConfig).toEqual(mockConfig);
      expect(capturedConfig).not.toHaveProperty('jwtSecret');
      expect(capturedConfig).not.toHaveProperty('__contextVersion');
    });

    it('should expose navShell through useAppConfig and preserve injected values', async () => {
      let capturedNavShell: PublicConfig['navShell'] | null = null;

      function TestComponent() {
        const config = useAppConfig();
        capturedNavShell = config.navShell;
        return <div>Nav shell loaded</div>;
      }

      render(
        <AppProvider config={mockConfig} user={null}>
          <TestComponent />
        </AppProvider>
      );

      await screen.findByText('Nav shell loaded');
      expect(capturedNavShell).toEqual([
        { id: 'home', label: 'Home', href: '/' },
        { id: 'problems', label: 'Problems', href: '/problems' },
      ]);
    });

    it('should fall back to public defaults for missing config fields', async () => {
      let capturedConfig: PublicConfig | null = null;

      function TestComponent() {
        const config = useAppConfig();
        capturedConfig = config;
        return <div>Partial config loaded</div>;
      }

      render(
        <AppProvider config={{ basePath: '/custom' } as PublicConfig} user={null}>
          <TestComponent />
        </AppProvider>
      );

      await screen.findByText('Partial config loaded');
      expect(capturedConfig).toEqual({ defaultCacheTTL: 0, basePath: '/custom', navShell: [] });
    });

    it('should allow conditional rendering based on navShell content', async () => {
      function ProblemsNavItem() {
        const config = useAppConfig();
        return config.navShell.some((item) => item.id === 'problems') ? (
          <div>Problems navigation available</div>
        ) : null;
      }

      render(
        <AppProvider config={mockConfig} user={null}>
          <ProblemsNavItem />
        </AppProvider>
      );

      await screen.findByText('Problems navigation available');
      expect(screen.getByText('Problems navigation available')).toBeInTheDocument();
    });
  });
});
