import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';

import { AuthContext } from '../../services/auth/authContext';

import { AppShell } from './AppShell';
import * as styles from './AppShell.styles';

import type { AuthUser } from '../../services/auth/authService.types';
import type { Meta, StoryObj } from '@storybook/react';

const CleanWorkspaceMock = () => {
  const [activeTab, setActiveTab] = useState(0);
  const s = styles.storyWorkspaceStyles;

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

const meta: Meta<typeof AppShell> = {
  title: 'Components/AppShell',
  component: AppShell,
  parameters: { layout: 'fullscreen' },
  args: { children: <CleanWorkspaceMock /> },
};

export default meta;
type Story = StoryObj<typeof AppShell>;

const authProviderMock = (user: AuthUser | null) => (StoryComponent: React.ComponentType) => (
  <AuthContext.Provider
    value={{
      user,
      isAuthenticated: !!user,
      isLoading: false,
      hydrationError: null,
      signIn: async () => {},
      signUp: async () => {},
      signOut: async () => {},
    }}
  >
    <StoryComponent />
  </AuthContext.Provider>
);

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
      localStorage.setItem('darkMode', 'true');
      return <StoryComponent />;
    },
  ],
  args: { currentPath: '/problems/two-sum' },
};
