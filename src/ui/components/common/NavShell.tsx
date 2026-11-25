import { useEffect, useState } from 'react';

import { NavigationMenu } from '../../../component-catalog/NavigationMenu/NavigationMenu';
import authService from '../../../services/auth/authService.active';
import {
  AUTH_SIGN_IN_EVENT,
  AUTH_SIGN_OUT_EVENT,
} from '../../../services/auth/authService.constants';
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
  const [currentUser, setCurrentUser] = useState(user);

  useEffect(() => {
    let ignoreRestore = false;
    setCurrentUser(user);

    function handleSignIn(event: Event) {
      ignoreRestore = true;
      setCurrentUser((event as CustomEvent<AuthUser>).detail);
    }

    function handleSessionEnd() {
      ignoreRestore = true;
      setCurrentUser(null);
    }

    window.addEventListener(AUTH_SIGN_IN_EVENT, handleSignIn);
    window.addEventListener(AUTH_SIGN_OUT_EVENT, handleSessionEnd);

    if (!user) {
      authService
        .hydrateFromServer()
        .then((session) => {
          if (!ignoreRestore) setCurrentUser(session?.user ?? null);
        })
        .catch(() => {
          if (!ignoreRestore) setCurrentUser(null);
        });
    }

    return () => {
      ignoreRestore = true;
      window.removeEventListener(AUTH_SIGN_IN_EVENT, handleSignIn);
      window.removeEventListener(AUTH_SIGN_OUT_EVENT, handleSessionEnd);
    };
  }, [user]);

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
        rightContent={<UserMenu user={currentUser} onSignOut={handleSignOut} />}
      />
      {children}
    </ClientOnlyMuiProvider>
  );
}
