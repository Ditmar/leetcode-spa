import ClientOnlyMuiProvider from '../../style-library/ClientOnlyMuiProvider';

import NavShell from './common/NavShell';

export default function ExplorePage() {
  return (
    <ClientOnlyMuiProvider>
      <NavShell>
        <h1>EXPLORE PAGE </h1>
      </NavShell>
    </ClientOnlyMuiProvider>
  );
}
