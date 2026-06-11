import AppProvider from '../../../context/AppConfigContext';
import AuthModal from '../AuthModal/AuthModal';

interface HomeAuthGateProps {
  isOpen: boolean;
  config?: unknown;
  user?: unknown;
}

export default function HomeAuthGate({ config = null, user = null, isOpen }: HomeAuthGateProps) {
  return (
    <AppProvider config={config} user={user}>
      <AuthModal isOpen={isOpen} />
    </AppProvider>
  );
}
