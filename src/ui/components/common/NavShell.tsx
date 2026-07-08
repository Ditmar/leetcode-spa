import { NavigationMenu } from '../../../component-catalog/NavigationMenu/NavigationMenu';
import ClientOnlyMuiProvider from '../../../style-library/ClientOnlyMuiProvider';
import { getConfig } from '../../../utils/config';

import type { NavSection } from '../../../component-catalog/NavigationMenu/NavigationMenu.types';

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
export interface NavShellProps {
  children: React.ReactNode;
  /** Route highlighted as active in the navigation bar. Falls back to the browser location. */
  currentPath?: string;
}

export default function NavShell({ children, currentPath }: NavShellProps) {
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
      />
      {children}
    </ClientOnlyMuiProvider>
  );
}
