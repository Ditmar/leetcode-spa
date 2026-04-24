import NavigationLogoFull from '../../assets/NavigationMenu.svg?url';
import NavigationLogoCompact from '../../assets/NavigationMenu2.svg?url';

import type { NavSection } from './NavigationMenu.types';

const DEFAULT_ARIA_LABEL = 'Main navigation' as const;

export const MOCK_NAV_SECTIONS: NavSection[] = [
  {
    id: 'main',
    items: [
      { id: 'home', label: 'Home', href: '/' },
      { id: 'about', label: 'About', href: '/about' },
      {
        id: 'products',
        label: 'Products',
        href: '/products',
        children: [
          { id: 'p1', label: 'Product 1', href: '/products/1' },
          { id: 'p2', label: 'Product 2', href: '/products/2' },
        ],
      },
    ],
  },
];

export const NAVIGATION_LOGOS = {
  full: NavigationLogoFull,
  compact: NavigationLogoCompact,
} as const;

export { DEFAULT_ARIA_LABEL };
