import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ListIcon from '@mui/icons-material/List';
import MenuIcon from '@mui/icons-material/Menu';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RemoveIcon from '@mui/icons-material/Remove';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Avatar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Menu,
  MenuItem,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from '@mui/material';
import React, { useState, useEffect, useMemo } from 'react';

import authService from '../../services/auth/authService';
import { useAuth as useCurrentUser } from '../../services/auth/useAuth';

import * as styles from './AppShell.styles';

const NAV_ITEMS = [
  { label: 'Premium', path: '/premium' },
  { label: 'Explore', path: '/explore' },
  { label: 'Problems', path: '/problems' },
  { label: 'Contest', path: '/contest' },
  { label: 'Discuss', path: '/discuss' },
];

const SIDEBAR_PROBLEMS = [
  {
    id: 1,
    title: '1. Two Sum',
    status: 'completed',
    difficulty: 'Easy',
    diffColor: 'var(--nav-accent-green)',
    pct: '49.2%',
  },
  {
    id: 2,
    title: '2. Add Two Numbers',
    status: 'progress',
    difficulty: 'Medium',
    diffColor: 'var(--nav-yellow)',
    pct: '41.8%',
  },
  {
    id: 3,
    title: '3. Longest Substring Without Repeating',
    status: 'unstarted',
    difficulty: 'Medium',
    diffColor: 'var(--nav-yellow)',
    pct: '33.9%',
  },
  {
    id: 4,
    title: '4. Median of Two Sorted Arrays',
    status: 'unstarted',
    difficulty: 'Hard',
    diffColor: 'var(--nav-red)',
    pct: '38.2%',
  },
  {
    id: 5,
    title: '5. Valid Parentheses',
    status: 'unstarted',
    difficulty: 'Easy',
    diffColor: 'var(--nav-accent-green)',
    pct: '40.1%',
  },
  {
    id: 6,
    title: '6. Merge Two Sorted Lists',
    status: 'unstarted',
    difficulty: 'Easy',
    diffColor: 'var(--nav-accent-green)',
    pct: '62.3%',
  },
];

export interface AppShellProps {
  children?: React.ReactNode;
  currentPath?: string;
  onOpenAuthModal?: () => void;
}

export const AppShell: React.FC<AppShellProps> = ({
  children,
  currentPath: customPath,
  onOpenAuthModal,
}) => {
  const { user } = useCurrentUser();
  const isAuthenticated = !!user;

  const [navMobileOpen, setNavMobileOpen] = useState(false);
  const [sidebarMobileOpen, setSidebarMobileOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [localPath, setLocalPath] = useState('');

  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true';
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;
      if (darkMode) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  }, [darkMode]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLocalPath(window.location.pathname);
    }
  }, []);

  const currentPath = customPath || localPath;
  const isProblemSolvingPage =
    /^\/problems\/[^/]+$/.test(currentPath) || currentPath.includes('two-sum');

  const handleToggleDarkMode = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    localStorage.setItem('darkMode', String(nextMode));
  };

  const handleSignOut = async () => {
    setAnchorElUser(null);
    await authService.signOut();
    window.location.href = '/';
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
          background: {
            default: 'var(--background)',
            paper: 'var(--card)',
          },
        },
      }),
    [darkMode]
  );

  const renderProblemsList = (onItemClick?: () => void) => (
    <List sx={styles.listContainerStyles}>
      {SIDEBAR_PROBLEMS.map((prob) => {
        const isSelected = prob.id === 1;
        return (
          <ListItem key={prob.id} disablePadding>
            <ListItemButton
              onClick={() => {
                if (onItemClick) onItemClick();
              }}
              sx={styles.getListItemButtonStyles(isSelected)}
            >
              <Box sx={styles.statusIconBoxStyles}>
                {prob.status === 'completed' && (
                  <CheckCircleIcon sx={{ color: 'var(--nav-accent-green)', fontSize: '18px' }} />
                )}
                {prob.status === 'progress' && (
                  <RemoveIcon
                    sx={{ color: 'var(--nav-yellow)', fontSize: '18px', fontWeight: 'bold' }}
                  />
                )}
                {prob.status === 'unstarted' && (
                  <RadioButtonUncheckedIcon
                    sx={{ color: 'var(--muted-foreground)', fontSize: '18px' }}
                  />
                )}
              </Box>

              <Box sx={styles.textMetaWrapperStyles}>
                <Typography variant="body2" sx={styles.getTitleTypographyStyles(isSelected)}>
                  {prob.title}
                </Typography>

                <Box sx={styles.diffLabelContainerStyles}>
                  <Typography
                    sx={{
                      fontSize: '11px',
                      fontWeight: 600,
                      color: `${prob.diffColor} !important`,
                    }}
                  >
                    {prob.difficulty}
                  </Typography>
                  <Typography
                    sx={{ fontSize: '11px', color: 'var(--muted-foreground) !important' }}
                  >
                    • {prob.pct}
                  </Typography>
                </Box>
              </Box>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={styles.flexLayoutStyles}>
        <AppBar position="static" sx={styles.appBarStyles}>
          <Toolbar sx={styles.toolbarStyles}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <IconButton
                color="inherit"
                aria-label="open main menu"
                onClick={() => setNavMobileOpen(true)}
                sx={{ display: { xs: 'flex', sm: 'none' }, minWidth: 40, minHeight: 40, p: 0.5 }}
              >
                <MenuIcon />
              </IconButton>

              {isProblemSolvingPage && !navMobileOpen && (
                <IconButton
                  color="inherit"
                  aria-label="open problems list"
                  onClick={() => setSidebarMobileOpen(true)}
                  sx={{
                    display: { xs: 'flex', sm: 'none' },
                    minWidth: 40,
                    minHeight: 40,
                    p: 0.5,
                    color: 'var(--editor-text)',
                  }}
                >
                  <ListIcon />
                </IconButton>
              )}

              <Typography
                variant="h6"
                component="a"
                href="/"
                sx={{ ...styles.logoTypographyStyles, display: 'flex', alignItems: 'center' }}
              >
                <Box component="span" sx={{ color: 'var(--nav-accent-green)', fontWeight: 'bold' }}>
                  &lt;/&gt;
                </Box>
                <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' }, ml: 0.5 }}>
                  LeetCode
                </Box>
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }} />

            <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 3, mr: 3 }}>
              {NAV_ITEMS.map((item) => {
                const isActive =
                  currentPath.startsWith(item.path) ||
                  (item.label === 'Problems' && isProblemSolvingPage);
                return (
                  <Button
                    key={item.label}
                    href={item.path}
                    sx={{
                      minHeight: 44,
                      textTransform: 'none',
                      fontSize: '13px',
                      color: 'var(--editor-text)',
                      fontWeight: isActive ? 600 : 400,
                      padding: 0,
                      minWidth: 'auto',
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.5, sm: 2 } }}>
              <IconButton
                onClick={handleToggleDarkMode}
                color="inherit"
                aria-label="toggle theme"
                sx={{ minWidth: 40, minHeight: 40, color: 'var(--editor-text)' }}
              >
                {darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
              </IconButton>

              {isAuthenticated ? (
                <>
                  <IconButton
                    onClick={(e) => setAnchorElUser(e.currentTarget)}
                    sx={{ minWidth: 40, minHeight: 40 }}
                  >
                    <Avatar
                      alt={user?.username || 'User'}
                      src={user?.avatarUrl || ''}
                      sx={{ width: 24, height: 24 }}
                    />
                  </IconButton>
                  <Menu
                    anchorEl={anchorElUser}
                    open={Boolean(anchorElUser)}
                    onClose={() => setAnchorElUser(null)}
                  >
                    <MenuItem onClick={() => setAnchorElUser(null)}>Profile</MenuItem>
                    <MenuItem onClick={() => setAnchorElUser(null)}>Settings</MenuItem>
                    <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
                  </Menu>
                </>
              ) : (
                <Button
                  variant="contained"
                  onClick={onOpenAuthModal}
                  sx={{
                    bgcolor: 'var(--nav-accent-green)',
                    color: 'var(--editor-text)',
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '12px',
                    height: 30,
                    borderRadius: '4px',
                    px: { xs: 1.5, sm: 2 },
                    whiteSpace: 'nowrap',
                    '&:hover': { bgcolor: 'var(--success-foreground)' },
                  }}
                >
                  Sign In
                </Button>
              )}
            </Box>
          </Toolbar>
        </AppBar>

        <Box sx={styles.workspaceContainerStyles}>
          {isProblemSolvingPage && (
            <Box
              sx={{
                ...styles.sidebarDesktopStyles,
                bgcolor: 'var(--background)',
                color: 'var(--foreground)',
                borderRight: '1px solid var(--border)',
                display: { xs: 'none', sm: 'flex' },
                flexDirection: 'column',
              }}
            >
              <Box sx={{ px: 3, py: 2, borderBottom: '1px solid var(--border)' }}>
                <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '16px' }}>
                  Problems
                </Typography>
              </Box>
              {renderProblemsList()}
            </Box>
          )}

          <Box component="main" sx={styles.mainContentSlotStyles}>
            {children}
          </Box>
        </Box>

        <Drawer
          variant="temporary"
          open={navMobileOpen}
          onClose={() => setNavMobileOpen(false)}
          anchor="left"
          sx={{
            display: { xs: 'block', sm: 'none' },
            zIndex: 1400,
            '& .MuiDrawer-paper': {
              bgcolor: 'var(--nav-bg)',
              boxShadow: 'none',
              width: 280,
              height: '100vh',
              borderRight: 'none',
            },
            '& .MuiModal-backdrop': { bgcolor: 'var(--chart-6)' },
          }}
        >
          <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                px: '24px',
                height: '50px',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: 'var(--primary-foreground)',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '16px',
                }}
              >
                <Box
                  component="span"
                  sx={{ color: 'var(--nav-accent-green)', fontWeight: 'bold', mr: 0.5 }}
                >
                  &lt;/&gt;
                </Box>
                LeetCode
              </Typography>
              <IconButton
                onClick={() => setNavMobileOpen(false)}
                sx={{ color: 'var(--editor-text)', p: 0 }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </IconButton>
            </Box>

            <List
              sx={{ pt: '24px', px: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}
            >
              {NAV_ITEMS.map((item) => (
                <ListItem key={item.label} disablePadding>
                  <ListItemButton
                    href={item.path}
                    onClick={() => setNavMobileOpen(false)}
                    sx={{
                      p: 0,
                      bgcolor: 'transparent !important',
                      '&:hover': {
                        '& .MuiTypography-root': { color: 'var(--primary-foreground)' },
                      },
                    }}
                  >
                    <Typography sx={{ fontSize: '15px', color: 'var(--editor-text)' }}>
                      {item.label}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>

        <Drawer
          variant="temporary"
          open={sidebarMobileOpen}
          onClose={() => setSidebarMobileOpen(false)}
          anchor="left"
          sx={{
            display: { xs: 'block', sm: 'none' },
            zIndex: 1300,
            '& .MuiDrawer-paper': {
              bgcolor: 'var(--background)',
              boxShadow: 'none',
              width: 290,
              height: '100vh',
            },
          }}
        >
          <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: '24px',
                height: '50px',
                bgcolor: darkMode ? 'var(--nav-bg)' : 'var(--sidebar)',
                color: 'var(--foreground)',
                borderBottom: '1px solid var(--border)',
              }}
            >
              <IconButton disabled sx={{ color: 'var(--muted-foreground)', p: 0 }}>
                <ListIcon fontSize="small" />
              </IconButton>

              <Typography variant="body1" sx={{ fontWeight: 600, fontSize: '15px' }}>
                Problems
              </Typography>

              <IconButton
                onClick={() => setSidebarMobileOpen(false)}
                sx={{ color: 'var(--muted-foreground)', p: 0 }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </IconButton>
            </Box>

            {renderProblemsList(() => setSidebarMobileOpen(false))}
          </Box>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
};
