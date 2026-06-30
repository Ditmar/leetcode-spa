export interface HomeNavigationLink {
  label: string;
  href: string;
}

export const HOME_NAVIGATION_LINKS: HomeNavigationLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Explore', href: '/explore' },
  { label: 'Problems', href: '/problems' },
  { label: 'Contests', href: '/contest' },
  { label: 'Discuss', href: '/discuss' },
];
