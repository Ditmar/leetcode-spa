import AppProvider from '../../../context/AppConfigContext';
import AuthModal from '../AuthModal/AuthModal';

import type { AuthUser } from '../../../services/auth/authService.types';
import type { AppConfig } from '../../../utils/config.types';

interface HomeAuthGateProps {
  isOpen: boolean;
  config?: AppConfig | null;
  user?: AuthUser | null;
}

// Keeps the auth modal and its providers inside one React island when rendered by Astro.
export default function HomeAuthGate({ config = null, user = null, isOpen }: HomeAuthGateProps) {
  return (
    <AppProvider config={config} user={user}>
      <AuthModal isOpen={isOpen} />
    </AppProvider>
  );
}
