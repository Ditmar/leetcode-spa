import ClientOnlyMuiProvider from '../../style-library/ClientOnlyMuiProvider';

import NavShell from './common/NavShell';

export interface ProblemsPageProps {
  /** Route highlighted as active in the navigation bar. */
  currentPath?: string;
}

export default function ProblemsPage({ currentPath = '/problems' }: ProblemsPageProps) {
  return (
    <ClientOnlyMuiProvider>
      <NavShell currentPath={currentPath}>
        <h1>Problems PAGE </h1>
      </NavShell>
    </ClientOnlyMuiProvider>
  );
}
