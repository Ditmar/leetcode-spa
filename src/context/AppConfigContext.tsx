import { createContext, useContext, type ReactNode } from 'react';

import { AuthProvider as AuthProviderBase } from '../services/auth/authContext';

import type { AuthUser } from '../services/auth/authService.types';
import type { PublicConfig } from '../utils/config.types';

interface AppConfigContextValue {
  config: PublicConfig | null;
  user: AuthUser | null;
  isAuthenticated: boolean;
}

interface AppProviderProps {
  children: ReactNode;
  config?: PublicConfig | null;
  user?: AuthUser | null;
  showDebug?: boolean;
}

function isDebugEnabled(explicitValue?: boolean): boolean {
  if (typeof explicitValue === 'boolean') {
    return explicitValue;
  }

  const envValue = import.meta.env.VITE_APP_CONFIG_DEBUG;
  if (typeof envValue === 'string') {
    return ['1', 'true', 'yes', 'on'].includes(envValue.toLowerCase());
  }

  return false;
}

const DEFAULT_PUBLIC_CONFIG: PublicConfig = {
  defaultCacheTTL: 0,
  basePath: '',
  navShell: [],
};

function normalizeConfig(config?: PublicConfig | null): PublicConfig {
  if (!config) {
    return { ...DEFAULT_PUBLIC_CONFIG };
  }

  return {
    defaultCacheTTL: config.defaultCacheTTL ?? DEFAULT_PUBLIC_CONFIG.defaultCacheTTL,
    basePath: config.basePath ?? DEFAULT_PUBLIC_CONFIG.basePath,
    navShell: Array.isArray(config.navShell) ? config.navShell : DEFAULT_PUBLIC_CONFIG.navShell,
  };
}

const DEFAULT_APP_CONTEXT_VALUE: AppConfigContextValue = {
  config: null,
  user: null,
  isAuthenticated: false,
};

const AppConfigContext = createContext<AppConfigContextValue>(DEFAULT_APP_CONTEXT_VALUE);

export function useAppContext(): AppConfigContextValue {
  const ctx = useContext(AppConfigContext);

  if (ctx === DEFAULT_APP_CONTEXT_VALUE) {
    throw new Error('useAppContext must be used inside <AppProvider>');
  }

  return ctx;
}

export function AppProvider({ children, config = null, user = null, showDebug }: AppProviderProps) {
  const safeConfig = normalizeConfig(config);
  const safeUser = user ?? null;
  const shouldShowDebug = isDebugEnabled(showDebug);

  const value: AppConfigContextValue = {
    config: safeConfig,
    user: safeUser,
    isAuthenticated: Boolean(safeUser),
  };

  return (
    <AppConfigContext.Provider value={value}>
      {shouldShowDebug && (
        <section
          style={{
            padding: '18px',
            margin: 0,
            color: '#111827',
            background: 'rgba(255,255,255,.92)',
            borderBottom: '1px solid rgba(15,23,42,.08)',
            fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
            boxShadow: '0 1px 2px rgba(15,23,42,0.05)',
          }}
          aria-label="AppConfigContext status"
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <span style={{ fontWeight: 700, letterSpacing: '0.03em' }}>AppConfigContext</span>
              <span style={{ opacity: 0.65 }}>active</span>
            </div>
            <div style={{ color: '#475569', fontSize: '0.92rem' }}>
              {safeUser ? `Hello, ${safeUser.username}` : 'Guest session'}
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
              gap: '0.8rem',
              marginTop: '0.95rem',
              fontSize: '0.95rem',
              lineHeight: 1.5,
            }}
          >
            <div
              style={{
                padding: '0.9rem',
                borderRadius: '0.75rem',
                background: '#f8fafc',
                border: '1px solid rgba(148,163,184,.16)',
              }}
            >
              <div
                style={{
                  fontSize: '0.76rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#64748b',
                }}
              >
                Base path
              </div>
              <div style={{ marginTop: '0.35rem', fontWeight: 600 }}>
                {safeConfig.basePath || '/'}
              </div>
            </div>

            <div
              style={{
                padding: '0.9rem',
                borderRadius: '0.75rem',
                background: '#f8fafc',
                border: '1px solid rgba(148,163,184,.16)',
              }}
            >
              <div
                style={{
                  fontSize: '0.76rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#64748b',
                }}
              >
                Nav items
              </div>
              <div style={{ marginTop: '0.35rem', fontWeight: 600 }}>
                {safeConfig.navShell.length}
              </div>
            </div>

            <div
              style={{
                padding: '0.9rem',
                borderRadius: '0.75rem',
                background: '#f8fafc',
                border: '1px solid rgba(148,163,184,.16)',
              }}
            >
              <div
                style={{
                  fontSize: '0.76rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#64748b',
                }}
              >
                Authenticated
              </div>
              <div
                style={{
                  marginTop: '0.35rem',
                  fontWeight: 600,
                  color: safeUser ? '#16a34a' : '#ef4444',
                }}
              >
                {safeUser ? 'Yes' : 'No'}
              </div>
            </div>

            <div
              style={{
                padding: '0.9rem',
                borderRadius: '0.75rem',
                background: '#f8fafc',
                border: '1px solid rgba(148,163,184,.16)',
              }}
            >
              <div
                style={{
                  fontSize: '0.76rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#64748b',
                }}
              >
                User
              </div>
              <div style={{ marginTop: '0.35rem', fontWeight: 600 }}>
                {safeUser ? safeUser.username : 'guest'}
              </div>
            </div>
          </div>
        </section>
      )}
      <AuthProviderBase>{children}</AuthProviderBase>
    </AppConfigContext.Provider>
  );
}

export { AppConfigContext };
export { useAppConfig } from './useAppConfig';
export default AppProvider;
