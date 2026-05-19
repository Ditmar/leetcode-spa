import ClientOnlyMuiProvider from '../../style-library/ClientOnlyMuiProvider';

import NavShell from './common/NavShell';

export default function ContestPage() {
  return (
    <ClientOnlyMuiProvider>
      <NavShell>
        <h1>Contest PAGE </h1>
      </NavShell>
    </ClientOnlyMuiProvider>
  );
}
