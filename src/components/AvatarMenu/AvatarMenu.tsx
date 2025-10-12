import React from 'react';
import { Avatar, Menu, MenuItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import type { AvatarMenuProps } from './AvatarMenu.types';
import { DEFAULT_AVATAR_MENU_ITEMS } from './AvatarMenu.constants';
import { AvatarMenuRoot, AvatarContainer, TriangleIndicator } from './AvatarMenu.styles';
import { useAvatarMenu } from './AvatarMenu.hook';

export const AvatarMenu: React.FC<AvatarMenuProps> = ({
	avatarUrl,
	username,
	menuItems = DEFAULT_AVATAR_MENU_ITEMS,
	avatarProps,
	fullWidth = false,
	'data-testid': testId = 'avatar-menu',
}) => {
	const {
		isOpen,
		anchorEl,
		handleToggle,
		handleClose,
		menuId,
		triggerId,
		focusedIndex,
		handleMenuKeyDown,
		setFocusedIndex
	} = useAvatarMenu();

	const enabledItems = menuItems.filter(item => !item.disabled);
	const enabledItemsCount = enabledItems.length;

	return (
		<>
			<AvatarMenuRoot
				id={triggerId}
				aria-label={`Menú de usuario${username ? `: ${username}` : ''}`}
				aria-controls={isOpen ? menuId : undefined}
				aria-haspopup="true"
				aria-expanded={isOpen ? 'true' : 'false'}
				onClick={handleToggle}
				data-testid={testId}
				$fullWidth={fullWidth}
				$isOpen={isOpen}
			>
				<AvatarContainer $fullWidth={fullWidth}>
					<Avatar
						src={avatarUrl}
						alt={username ? `${username.toUpperCase()}` : ''}
						{...avatarProps}
					/>
					<TriangleIndicator $isOpen={isOpen} />
				</AvatarContainer>
			</AvatarMenuRoot>


			<Menu
				id={menuId}
				anchorEl={anchorEl}
				open={isOpen}
				onClose={handleClose}
				disablePortal={false}
				keepMounted={false}
				disableScrollLock={true}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				slotProps={{
					paper: {
						sx: {
							marginTop: '8px',
							zIndex: 1300,
						}
					}
				}}
				MenuListProps={{
					'aria-labelledby': triggerId,
					onKeyDown: (e: React.KeyboardEvent<HTMLUListElement>) =>
						handleMenuKeyDown(e, enabledItemsCount),
					autoFocus: true,
					dense: true,
				}}
			>
				{menuItems.map((item, index) => {
					const isEnabled = !item.disabled;
					const isFocused = focusedIndex === index && isEnabled;

					return (
						<div key={item.label || index}>
							<MenuItem
								onClick={() => {
									if (isEnabled) {
										item.onClick();
										handleClose();
									}
								}}
								onMouseEnter={() => {
									if (isEnabled) {
										setFocusedIndex(index);
									}
								}}
								disabled={item.disabled}
								data-testid={item['data-testid']}
								autoFocus={isFocused}
								{...item.menuItemProps}
								sx={{
									...(isFocused && {
										backgroundColor: 'action.hover',
										boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
										border: '1px solid',
										borderColor: 'divider',
										borderRadius: '6px',
									}),
									transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
									...item.menuItemProps?.sx,
								}}
							>
								{item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
								<ListItemText>{item.label}</ListItemText>
							</MenuItem>
							{item.divider && <Divider />}
						</div>
					);
				})}
			</Menu>
		</>
	);
};