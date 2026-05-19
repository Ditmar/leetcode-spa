import ClientOnlyMuiProvider from '../../style-library/ClientOnlyMuiProvider';

import NavShell from './common/NavShell';

export default function DiscussPage() {
  return (
    <ClientOnlyMuiProvider>
      <NavShell>
        <h1>Discuss PAGE </h1>
      </NavShell>
    </ClientOnlyMuiProvider>
  );
}
