import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import {
  Avatar,
  Box,
  Button,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material';
import { useMemo, useState } from 'react';

import { useThemeMode } from '../../../style-library/provider/MuiThemeProvider';

import type { AuthUser } from '../../../services/auth/authService.types';
import type { ThemeMode } from '../../../style-library/provider/MuiThemeProvider';
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

export function ThemeMenuButton() {
  const { mode, setMode, isDark } = useThemeMode();
  const [themeAnchorEl, setThemeAnchorEl] = useState<HTMLElement | null>(null);
  const isThemeMenuOpen = Boolean(themeAnchorEl);

  const handleOpenThemeMenu = (event: MouseEvent<HTMLElement>) => {
    setThemeAnchorEl(event.currentTarget);
  };
  const handleCloseThemeMenu = () => {
    setThemeAnchorEl(null);
  };

  const handleSelectMode = (newMode: ThemeMode) => {
    setMode(newMode);
    handleCloseThemeMenu();
  };

  const currentIcon = useMemo(() => {
    if (mode === 'system') {
      return <SettingsBrightnessIcon fontSize="small" />;
    }
    return isDark ? <DarkModeIcon fontSize="small" /> : <LightModeIcon fontSize="small" />;
  }, [mode, isDark]);

  return (
    <>
      <Tooltip title={`Theme: ${mode}`}>
        <IconButton
          onClick={handleOpenThemeMenu}
          size="small"
          aria-label={`Toggle theme (current: ${mode})`}
          aria-controls={isThemeMenuOpen ? 'theme-menu' : undefined}
          aria-haspopup="menu"
          aria-expanded={isThemeMenuOpen}
          data-testid="theme-toggle"
        >
          {currentIcon}
        </IconButton>
      </Tooltip>
      <Menu
        id="theme-menu"
        anchorEl={themeAnchorEl}
        open={isThemeMenuOpen}
        onClose={handleCloseThemeMenu}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem
          selected={mode === 'light'}
          onClick={() => handleSelectMode('light')}
          data-testid="theme-option-light"
        >
          <ListItemIcon>
            <LightModeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Light</ListItemText>
        </MenuItem>
        <MenuItem
          selected={mode === 'dark'}
          onClick={() => handleSelectMode('dark')}
          data-testid="theme-option-dark"
        >
          <ListItemIcon>
            <DarkModeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Dark</ListItemText>
        </MenuItem>
        <MenuItem
          selected={mode === 'system'}
          onClick={() => handleSelectMode('system')}
          data-testid="theme-option-system"
        >
          <ListItemIcon>
            <SettingsBrightnessIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>System</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
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
        <ThemeMenuButton />
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
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexShrink: 0 }}>
      <ThemeMenuButton />
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
    </Box>
  );
}
