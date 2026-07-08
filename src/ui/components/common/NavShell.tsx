import { useTranslation } from 'react-i18next';

import { LanguageSelector } from '../../../component-catalog/LanguageSelector/LanguageSelector';
import { NavigationMenu } from '../../../component-catalog/NavigationMenu/NavigationMenu';
import ClientOnlyMuiProvider from '../../../style-library/ClientOnlyMuiProvider';
import { getConfig } from '../../../utils/config';

import type { NavSection } from '../../../component-catalog/NavigationMenu/NavigationMenu.types';
import type { TFunction } from 'i18next';

function buildNavSections(t: TFunction): NavSection[] {
  const configuration = getConfig();

  return [
    {
      id: 'main-menu',
      items: configuration.navShell.map((navItem) => ({
        id: navItem.id,
        label: t(`navigation.${navItem.id}`, {
          defaultValue: navItem.label,
        }),
        href: navItem.href,
      })),
    },
  ];
}

export default function NavShell({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation();

  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
  const navigationStructure = buildNavSections(t);

  return (
    <ClientOnlyMuiProvider>
      <NavigationMenu
        navSections={navigationStructure}
        currentPath={currentPath}
        ariaLabel={t('navigation.ariaLabel')}
        rightContent={<LanguageSelector compact />}
        signInLabel={t('navigation.signIn')}
        size="medium"
        variant="primary"
      />
      {children}
    </ClientOnlyMuiProvider>
  );
}
