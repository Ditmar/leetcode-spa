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
export default function NavShell({ children }: { children: React.ReactNode }) {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
  const navigationStructure = buildNavSections();
  return (
    <ClientOnlyMuiProvider>
      <NavigationMenu
        navSections={navigationStructure}
        currentPath={currentPath}
        size="medium"
        variant="primary"
      />
      {children}
    </ClientOnlyMuiProvider>
  );
}
