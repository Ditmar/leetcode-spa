import type { Meta, StoryObj } from '@storybook/react';
import { AvatarMenu } from './AvatarMenu';
import { DEFAULT_AVATAR_MENU_ITEMS } from './AvatarMenu.constants';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import type { AvatarMenuItem, AvatarMenuProps } from './AvatarMenu.types';

const extendedDefaultItems: AvatarMenuItem[] = DEFAULT_AVATAR_MENU_ITEMS.map((item) => ({
	...item,
	icon: item.label.includes('Perfil') ? (
		<AccountCircleIcon fontSize="small" />
	) : item.label.includes('Configuración') ? (
		<SettingsIcon fontSize="small" />
	) : item.label.includes('Sesión') ? (
		<LogoutIcon fontSize="small" />
	) : undefined,
}));

const customItems: AvatarMenuItem[] = [
	{
		label: 'Cambiar a Modo Oscuro',
		onClick: () => console.log('Dark Mode'),
		'data-testid': 'dark-mode-option',
	},
	{ label: 'Ayuda y Soporte', onClick: () => console.log('Help'), 'data-testid': 'help-option' },
	{ label: 'Cerrar Sesión', onClick: () => console.log('Logout'), divider: true },
];

interface AvatarMenuStoryArgs extends AvatarMenuProps {
	onItemClicked: (label: string) => void;
}

const meta: Meta<AvatarMenuStoryArgs> = {
	title: 'Navigation/AvatarMenu',
	component: AvatarMenu,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: 'Componente de menú desplegable para usuario autenticado',
			},
		},
	},
	argTypes: {
		avatarUrl: { control: 'text' },
		username: { control: 'text' },
		fullWidth: { control: 'boolean' },
		menuItems: { control: 'object' },
		'data-testid': { control: 'text' },
		onItemClicked: { action: 'menuItemClicked' },
	},
	args: {
		avatarUrl:
			'https://images.unsplash.com/photo-1749989402507-1d8a8e98bb14?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcmZpbCUyMGRlJTIwaG9tYnJlfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000',
		username: 'Usuario Ejemplo',
		fullWidth: false,
		onItemClicked: () => { },
		menuItems: extendedDefaultItems,
	},
	render: (args) => {
		const itemsWithAction: AvatarMenuItem[] =
			args.menuItems?.map((item) => ({
				...item,
				onClick: () => {
					item.onClick();
				},
			})) || [];

		return <AvatarMenu {...args} menuItems={itemsWithAction} />;
	},
};

export default meta;
type Story = StoryObj<typeof AvatarMenu>;

export const Standard: Story = {
	args: {
		username: 'Usuario Estándar',
	},
	parameters: {
		docs: { description: { story: 'Menú estándar con items por defecto y avatar con imagen' } },
	},
};

export const CustomActions: Story = {
	args: {
		username: 'Administrador',
		menuItems: customItems,
	},
	parameters: {
		docs: { description: { story: 'Menú con items personalizados y acciones específicas' } },
	},
};

export const AvatarFallback: Story = {
	args: {
		avatarUrl: '',
		username: 'Fallback User',
	},
	parameters: {
		docs: { description: { story: 'Avatar sin imagen' } },
	},
};

export const EmptyMenu: Story = {
	args: {
		username: 'Usuario Sin Menú',
		menuItems: [],
	},
	parameters: {
		docs: { description: { story: 'Menú vacío sin opciones disponibles' } },
	},
};

export const DisabledItems: Story = {
	args: {
		username: 'Usuario Deshabilitado',

		menuItems: [
			{ label: 'Opción 1', onClick: () => { }, disabled: true },
			{ label: 'Opción 2', onClick: () => { }, disabled: true, divider: true },
		],
		fullWidth: false,
	},
	parameters: {
		docs: { description: { story: 'Items deshabilitados que no pueden ser seleccionados' } },
	},
};

export const LayoutVariants: Story = {
	args: {
		username: '',
		fullWidth: true,
	},
	parameters: {
		layout: 'padded',
		docs: { description: { story: 'Variantes de layout: sin username y fullWidth' } },
	},
};