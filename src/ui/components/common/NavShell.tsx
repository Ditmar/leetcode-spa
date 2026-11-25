import { NavigationMenu } from '../../../component-catalog/NavigationMenu/NavigationMenu';
import { AUTH_SIGN_OUT_EVENT } from '../../../services/auth/authService.constants';
import ClientOnlyMuiProvider from '../../../style-library/ClientOnlyMuiProvider';
import { getConfig } from '../../../utils/config';

import UserMenu from './UserMenu';

import type { NavSection } from '../../../component-catalog/NavigationMenu/NavigationMenu.types';
import type { AuthUser } from '../../../services/auth/authService.types';

function buildNavSections(): NavSection[] {
  const configuration = getConfig();

  const navigationStructure: NavSection[] = [
    {
      id: 'main-menu',
      items: configuration.navShell.map((navItem) => ({
        id: navItem.id,
        label: navItem.label,
        href: navItem.href,
      })),
    },
  ];
  return navigationStructure;
}

/** Astro BFF route that revokes the refresh token in the API and clears both cookies. */
export const LOGOUT_ENDPOINT = '/api/auth/logout';

/**
 * Sign out through the Astro BFF (SPA-003). The browser holds no token, so there is
 * no session to restore first: the HttpOnly cookies go with the same-origin request,
 * and the BFF revokes the refresh token and clears both cookies.
 *
 * Even if the request fails, the UI moves to the signed-out state and reloads, so the
 * server renders the page again with whatever cookies are left.
 */
export async function handleSignOut(
  reloadPage: () => void = () => window.location.reload(),
  fetchFn: typeof fetch = (...args) => fetch(...args)
) {
  try {
    await fetchFn(LOGOUT_ENDPOINT, {
      method: 'POST',
      credentials: 'same-origin',
      headers: { Accept: 'application/json' },
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('[NavShell] sign-out request failed, signing out locally:', error);
  }

  window.dispatchEvent(new CustomEvent(AUTH_SIGN_OUT_EVENT));
  reloadPage();
}

export interface NavShellProps {
  children?: React.ReactNode;
  /** Route highlighted as active in the navigation bar. Falls back to the browser location. */
  currentPath?: string;
  /** Signed-in user, read on the server. Null or undefined means signed out. */
  user?: AuthUser | null;
}

export default function NavShell({ children, currentPath, user = null }: NavShellProps) {
  const resolvedPath =
    currentPath ?? (typeof window !== 'undefined' ? window.location.pathname : '/');
  const navigationStructure = buildNavSections();
  return (
    <ClientOnlyMuiProvider>
      <NavigationMenu
        navSections={navigationStructure}
        currentPath={resolvedPath}
        size="medium"
        variant="primary"
        rightContent={<UserMenu user={user} onSignOut={handleSignOut} />}
      />
      {children}
    </ClientOnlyMuiProvider>
  );
}
