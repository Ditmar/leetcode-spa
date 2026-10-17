import { Avatar, Box, Button, IconButton, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';

import type { AuthUser } from '../../../services/auth/authService.types';
import type { MouseEvent } from 'react';

export interface UserMenuProps {
  /** Signed-in user. Null or undefined means signed out. */
  user?: AuthUser | null;
  signInHref?: string;
  signUpHref?: string;
  profileHref?: string;
  submissionsHref?: string;
  onSignOut?: () => void;
}

export default function UserMenu({
  user = null,
  signInHref = '/?authRequired=true',
  signUpHref = '/?authRequired=true',
  profileHref = '/profile',
  submissionsHref = '/submissions',
  onSignOut,
}: UserMenuProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const isOpen = Boolean(anchorEl);

  const handleOpen = (event: MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleSignOut = () => {
    handleClose();
    onSignOut?.();
  };

  if (!user) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexShrink: 0 }}>
        <Button
          component="a"
          href={signInHref}
          color="inherit"
          size="small"
          data-testid="user-menu-sign-in"
        >
          Sign in
        </Button>
        <Button
          component="a"
          href={signUpHref}
          color="success"
          variant="contained"
          size="small"
          data-testid="user-menu-sign-up"
        >
          Sign up
        </Button>
      </Box>
    );
  }

  return (
    <>
      <IconButton
        onClick={handleOpen}
        size="small"
        aria-label="Open user menu"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={isOpen ? 'user-menu' : undefined}
        data-testid="user-menu-trigger"
      >
        <Avatar src={user.avatarUrl} alt={user.username} sx={{ width: 36, height: 36 }}>
          {user.username.charAt(0).toUpperCase()}
        </Avatar>
      </IconButton>
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem component="a" href={profileHref} onClick={handleClose}>
          Profile
        </MenuItem>
        <MenuItem component="a" href={submissionsHref} onClick={handleClose}>
          My submissions
        </MenuItem>
        <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
      </Menu>
    </>
  );
}
