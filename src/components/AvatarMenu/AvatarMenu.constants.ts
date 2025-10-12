import type { AvatarMenuItem } from './AvatarMenu.types';

export const DEFAULT_AVATAR_MENU_ITEMS: AvatarMenuItem[] = [
  {
    label: 'Mi Perfil',
    onClick: () => console.log('Acción: Navegar a Perfil'),
    'data-testid': 'menu-item-profile',
  },
  {
    label: 'Configuración de Cuenta',
    onClick: () => console.log('Acción: Abrir Configuración'),
    'data-testid': 'menu-item-settings',
  },
  {
    label: 'Cerrar Sesión',
    onClick: () => console.log('Acción: Ejecutar Logout'),
    divider: true,
    'data-testid': 'menu-item-logout',
  },
] as const;