import { Box, Typography } from '@mui/material';
import React, { useState, createContext } from 'react';

import { AppShell } from './AppShell';

import type { AuthUser } from '../../services/auth/authService.types';
import type { SxProps, Theme } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

export const storyWorkspaceStyles = {
  workspaceRootStyles: {
    display: 'flex',
    width: '100%',
    height: '100%',
    bgcolor: 'var(--background)',
  } as SxProps<Theme>,

  leftWorkspaceStyles: {
    flex: 1,
    p: 3,
    display: { xs: 'none', md: 'flex' },
    alignItems: 'center',
    justifyContent: 'center',
    borderRight: '1px solid var(--sidebar-border)',
    bgcolor: 'var(--background)',
  } as SxProps<Theme>,

  rightWorkspaceStyles: {
    flex: 1,
    maxWidth: { xs: '100%', md: '50%' },
    bgcolor: 'var(--background)',
    display: 'flex',
    flexDirection: 'column',
    borderLeft: '1px solid var(--sidebar-border)',
  } as SxProps<Theme>,

  codeEditorAreaStyles: {
    flex: 1,
    p: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    bgcolor: 'var(--nav-bg)',
  } as SxProps<Theme>,

  consolePanelWrapperStyles: {
    bgcolor: 'var(--editor-panel-bg)',
    display: 'flex',
    flexDirection: 'column',
  } as SxProps<Theme>,

  consoleToolbarStyles: {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: { xs: 1.5, sm: 0 },
    px: '14px',
    py: { xs: '12px', sm: 0 },
    height: { xs: 'auto', sm: '46px' },
    bgcolor: 'var(--nav-border)',
    userSelect: 'none',
    borderTop: '1px solid var(--editor-panel-border)',
  } as SxProps<Theme>,

  tabsCapsuleStyles: {
    display: 'flex',
    alignItems: 'center',
    bgcolor: 'var(--editor-panel)',
    borderRadius: '24px',
    p: '3px',
    width: { xs: '100%', sm: 'auto' },
  } as SxProps<Theme>,

  getTabItemStyles: (isActive: boolean): SxProps<Theme> => ({
    cursor: 'pointer',
    fontSize: '12.5px',
    fontWeight: 500,
    borderRadius: '20px',
    px: '14px',
    py: '4px',
    flex: { xs: 1, sm: 'none' },
    textAlign: 'center',
    whiteSpace: 'nowrap',
    transition: 'all 0.15s ease',
    color: 'var(--card)',
    bgcolor: isActive ? 'var(--editor-panel-bg)' : 'transparent',
  }),

  actionButtonsContainerStyles: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    width: { xs: '100%', sm: 'auto' },
  } as SxProps<Theme>,

  runButtonStyles: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    bgcolor: 'var(--editor-panel-bg)',
    color: 'var(--secondary)',
    height: '32px',
    width: '77.06px',
    borderRadius: '6px',
    flex: { xs: 1, sm: 'none' },
    fontSize: '12.5px',
    fontWeight: 500,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'background-color 0.15s',
    '&:hover': { bgcolor: 'var(--nav-bg)' },
  } as SxProps<Theme>,

  submitButtonStyles: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    bgcolor: 'var(--nav-accent-green)',
    color: 'var(--editor-text)',
    height: '32px',
    width: '95.34px',
    borderRadius: '6px',
    flex: { xs: 1, sm: 'none' },
    fontSize: '12.5px',
    fontWeight: 600,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'background-color 0.15s',
    '&:hover': { bgcolor: 'var(--success-foreground)' },
  } as SxProps<Theme>,

  lowerPanelContextStyles: {
    p: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    minHeight: 220,
    maxHeight: 220,
    overflowY: 'auto',
    bgcolor: 'var(--nav-border)',
  } as SxProps<Theme>,

  caseCardStyles: {
    width: '100%',
    backgroundColor: 'var(--editor-panel)',
    borderRadius: '5px',
    padding: '12px 16px',
    boxSizing: 'border-box',
    border: '1px solid var(--editor-panel-border)',
  } as SxProps<Theme>,

  noResultsWrapperStyles: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    pt: 4,
  } as SxProps<Theme>,
};
const CleanWorkspaceMock = () => {
  const [activeTab, setActiveTab] = useState(0);
  const s = storyWorkspaceStyles;
  return (
    <Box sx={s.workspaceRootStyles}>
      <Box sx={s.leftWorkspaceStyles}>
        <Typography variant="body2" sx={{ color: 'var(--foreground)', fontFamily: 'monospace' }}>
          [ Left Workspace / Problem Details Area ]
        </Typography>
      </Box>

      <Box sx={s.rightWorkspaceStyles}>
        <Box sx={s.codeEditorAreaStyles}>
          <Typography
            variant="body2"
            sx={{ color: 'var(--muted-foreground)', fontFamily: 'monospace' }}
          >
            [ Code Editor Area ]
          </Typography>
        </Box>

        <Box sx={s.consolePanelWrapperStyles}>
          <Box sx={s.consoleToolbarStyles}>
            <Box sx={s.tabsCapsuleStyles}>
              <Box onClick={() => setActiveTab(0)} sx={s.getTabItemStyles(activeTab === 0)}>
                Testcases
              </Box>
              <Box onClick={() => setActiveTab(1)} sx={s.getTabItemStyles(activeTab === 1)}>
                Test Result
              </Box>
            </Box>

            <Box sx={s.actionButtonsContainerStyles}>
              <Box onClick={() => {}} sx={s.runButtonStyles}>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                Run
              </Box>

              <Box onClick={() => {}} sx={s.submitButtonStyles}>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
                Submit
              </Box>
            </Box>
          </Box>

          <Box sx={s.lowerPanelContextStyles}>
            {activeTab === 0 ? (
              <>
                <Box sx={s.caseCardStyles}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'var(--editor-text)',
                      fontWeight: 600,
                      fontFamily: 'monospace',
                      fontSize: '12px',
                      mb: '6px',
                    }}
                  >
                    Case 1
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'var(--editor-text)',
                      fontFamily: 'monospace',
                      fontSize: '12px',
                      display: 'block',
                      mb: '4px',
                    }}
                  >
                    Input: [2,7,11,15], 9
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'var(--editor-text)',
                      fontFamily: 'monospace',
                      fontSize: '12px',
                      display: 'block',
                    }}
                  >
                    Expected: [0,1]
                  </Typography>
                </Box>

                <Box sx={s.caseCardStyles}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'var(--editor-text)',
                      fontWeight: 600,
                      fontFamily: 'monospace',
                      fontSize: '12px',
                      mb: '6px',
                    }}
                  >
                    Case 2
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'var(--editor-text)',
                      fontFamily: 'monospace',
                      fontSize: '12px',
                      display: 'block',
                      mb: '4px',
                    }}
                  >
                    Input: [3,2,4], 6
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'var(--editor-text)',
                      fontFamily: 'monospace',
                      fontSize: '12px',
                      display: 'block',
                    }}
                  >
                    Expected: [1,2]
                  </Typography>
                </Box>
              </>
            ) : (
              <Box sx={s.noResultsWrapperStyles}>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'var(--editor-text)',
                    textAlign: 'center',
                    fontFamily: 'monospace',
                    fontSize: '12px',
                  }}
                >
                  No test results yet. Run your code to see results.
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const AppConfigContext = createContext<Record<string, unknown> | null>(null);

const authProviderMock = (user: AuthUser | null) => (StoryComponent: React.ComponentType) => (
  <AppConfigContext.Provider
    value={{
      user,
      config: {
        defaultCacheTTL: 3600,
        basePath: '/api',
        environment: 'development',
      },
    }}
  >
    <StoryComponent />
  </AppConfigContext.Provider>
);

const meta: Meta<typeof AppShell> = {
  title: 'Components/AppShell',
  component: AppShell,
  parameters: { layout: 'fullscreen' },
  args: { children: <CleanWorkspaceMock /> },
};

export default meta;
type Story = StoryObj<typeof AppShell>;

export const Unauthenticated: Story = {
  decorators: [authProviderMock(null)],
  args: { currentPath: '/problems/two-sum' },
};

export const Authenticated: Story = {
  decorators: [authProviderMock({ username: 'TestUser', avatarUrl: '' } as AuthUser)],
  args: { currentPath: '/problems/two-sum' },
};

export const MobileView: Story = {
  decorators: [authProviderMock(null)],
  args: { currentPath: '/problems/two-sum' },
  parameters: { viewport: { defaultViewport: 'mobile1' } },
};

export const DarkMode: Story = {
  decorators: [
    authProviderMock(null),
    (StoryComponent: React.ComponentType) => {
      try {
        localStorage.setItem('darkMode', 'true');
      } catch {
        // Prevent blocking if the Storybook sandbox restricts storage
      }
      if (typeof window !== 'undefined') {
        document.documentElement.classList.add('dark');
      }
      return <StoryComponent />;
    },
  ],
  args: { currentPath: '/problems/two-sum' },
};
