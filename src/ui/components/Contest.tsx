import ClientOnlyMuiProvider from '../../style-library/ClientOnlyMuiProvider';

import NavShell from './common/NavShell';

export interface ContestPageProps {
  /** Route highlighted as active in the navigation bar. */
  currentPath?: string;
}

export default function ContestPage({ currentPath = '/contest' }: ContestPageProps) {
  return (
    <ClientOnlyMuiProvider>
      <NavShell currentPath={currentPath}>
        <h1>Contest PAGE </h1>
      </NavShell>
    </ClientOnlyMuiProvider>
  );
}
