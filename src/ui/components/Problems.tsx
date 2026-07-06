import ClientOnlyMuiProvider from '../../style-library/ClientOnlyMuiProvider';

import CodeExecutionPanel from './CodeExecutionPanel';
import NavShell from './common/NavShell';

export default function ProblemsPage() {
  return (
    <ClientOnlyMuiProvider>
      <NavShell>
        <CodeExecutionPanel />
      </NavShell>
    </ClientOnlyMuiProvider>
  );
}
