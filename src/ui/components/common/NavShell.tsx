import { NavigationMenu } from '../../../component-catalog/NavigationMenu/NavigationMenu';
import authService from '../../../services/auth/authService';
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

export async function handleSignOut(reloadPage: () => void = () => window.location.reload()) {
  // TODO(SPA-003): Replace this in-memory session restoration with
  // POST /api/auth/logout through the Astro BFF.
  // The browser must not keep authentication tokens.
  if (!authService.getSession()) {
    await authService.hydrateFromServer();
  }

  await authService.signOut();
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
