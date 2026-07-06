import ClientOnlyMuiProvider from '../../style-library/ClientOnlyMuiProvider';

import NavShell from './common/NavShell';

export interface ExplorePageProps {
  /** Route highlighted as active in the navigation bar. */
  currentPath?: string;
}

export default function ExplorePage({ currentPath = '/explore' }: ExplorePageProps) {
  return (
    <ClientOnlyMuiProvider>
      <NavShell currentPath={currentPath}>
        <h1>EXPLORE PAGE </h1>
      </NavShell>
    </ClientOnlyMuiProvider>
  );
}
