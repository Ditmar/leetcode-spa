import { getConfig } from '@config';

import { NavigationMenu } from '../../component-catalog/NavigationMenu/NavigationMenu';
import ClientOnlyMuiProvider from '../../style-library/ClientOnlyMuiProvider';

import type { NavSection } from '../../component-catalog/NavigationMenu/NavigationMenu.types';
import type { ReactNode } from 'react';

function buildNavSections(): NavSection[] {
  const { basePath, navHomePath, navExplorePath, navProblemsPath, navContestPath, navDiscussPath } =
    getConfig();
  const base = basePath.replace(/\/$/, '');

  return [
    {
      id: 'main',
      items: [
        { id: 'home', label: 'Home', href: `${base}${navHomePath}` },
        { id: 'explore', label: 'Explore', href: `${base}${navExplorePath}` },
        { id: 'problems', label: 'Problems', href: `${base}${navProblemsPath}` },
        { id: 'contest', label: 'Contest', href: `${base}${navContestPath}` },
        { id: 'discuss', label: 'Discuss', href: `${base}${navDiscussPath}` },
      ],
    },
  ];
}

interface NavShellProps {
  children: ReactNode;
}

export default function NavShell({ children }: NavShellProps) {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
  const navSections = buildNavSections();

  return (
    <ClientOnlyMuiProvider>
      <NavigationMenu navSections={navSections} currentPath={currentPath} />
      {children}
    </ClientOnlyMuiProvider>
  );
}
