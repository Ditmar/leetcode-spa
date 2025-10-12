import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon /> },
  { text: 'Test', icon: <PersonIcon /> },
  { text: 'Courses', icon: <MenuBookIcon /> },
  { text: 'Profile', icon: <AccountCircleIcon /> },
  { text: 'Leaderboard', icon: <GroupsIcon />, active: true },
  { text: 'Dark mode', icon: <DarkModeIcon /> },
];

interface NavigationSidebarProps {
  width?: number;
}

export const NavigationSidebar: React.FC<NavigationSidebarProps> = ({ width = 240 }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box sx={{ p: 2 }} sx={{
      background: 'linear-gradient(to bottom, #fbe8d3 0%, #ffffff 100%)', // piel → blanco
      borderRadius: 2,
      p: 1,
    }}>
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography
          variant="h4"
          component="div"
          fontWeight="bold"
          sx={{
            background: 'linear-gradient(90deg, #b347ff 0%, #d699ff 50%, #ffffff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Leet
        </Typography>
        <Typography variant="h4" component="div" fontWeight="bold" color="primary" sx={{
          color: '#ffffff'
        }}>
          Code
        </Typography>

      </Box>

      <List >
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              selected={item.active}
              sx={{
                borderRadius: 2,
                '&.Mui-selected': {
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                  '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                  },
                  '& .MuiListItemIcon-root': {
                    color: 'inherit',
                  },
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  if (isMobile) {
    return (
      <>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: width,
              border: 'none',
              boxShadow: theme.shadows[8],
            },
          }}
        >
          {drawerContent}
        </Drawer>

        <Box
          sx={{
            position: 'fixed',
            top: 16,
            left: 16,
            zIndex: theme.zIndex.drawer + 1,
            backgroundColor: theme.palette.background.paper,
            borderRadius: '50%',
            width: 40,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: theme.shadows[2],
            cursor: 'pointer',
          }}
          onClick={handleDrawerToggle}
        >
          <Box
            sx={{
              width: 20,
              height: 2,
              backgroundColor: theme.palette.text.primary,
              position: 'relative',
              '&::before, &::after': {
                content: '""',
                position: 'absolute',
                width: 20,
                height: 2,
                backgroundColor: theme.palette.text.primary,
                left: 0,
              },
              '&::before': {
                top: -6,
              },
              '&::after': {
                top: 6,
              },
            }}
          />
        </Box>
      </>
    );
  }

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: width,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: width,
          boxSizing: 'border-box',
          border: 'none',
          boxShadow: theme.shadows[2],
        },
      }}
    >
      {drawerContent}
    </Drawer>
  );
};

export default NavigationSidebar;