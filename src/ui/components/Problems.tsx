import ClientOnlyMuiProvider from '../../style-library/ClientOnlyMuiProvider';

import NavShell from './common/NavShell';

export default function ProblemsPage() {
  return (
    <ClientOnlyMuiProvider>
      <NavShell>
        <h1>Problems PAGE </h1>
      </NavShell>
    </ClientOnlyMuiProvider>
  );
}
