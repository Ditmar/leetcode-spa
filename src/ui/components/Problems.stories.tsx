import {
  MOCK_PROBLEM_CATALOG,
  filterMockProblems,
  mockProblemsService,
} from '../../services/problems/problemsService.mock';
import ClientOnlyMuiProvider from '../../style-library/ClientOnlyMuiProvider';

import ProblemsPage from './Problems';
import { PROBLEMS_PAGE_SIZE, parseProblemsQuery } from './problems/problemsQuery';

import type { ProblemsDataSource } from '../../services/problems/problemsDataSource';
import type { Meta, StoryObj } from '@storybook/react';

const NAV_ROUTES = ['/', '/explore', '/problems', '/contest', '/discuss'];

const MOCK_TAGS = [...new Set(MOCK_PROBLEM_CATALOG.flatMap((problem) => problem.tags))].sort();

const FIRST_PAGE = filterMockProblems(MOCK_PROBLEM_CATALOG, {
  page: 1,
  pageSize: PROBLEMS_PAGE_SIZE,
});

/** Never answers, so the loading state stays on screen. */
const pendingDataSource: ProblemsDataSource = {
  getProblems: () => new Promise(() => {}),
  getTags: async () => MOCK_TAGS,
};

const meta: Meta<typeof ProblemsPage> = {
  title: 'pages/ProblemsPage',
  component: ProblemsPage,
  decorators: [
    (Story) => (
      <ClientOnlyMuiProvider>
        <Story />
      </ClientOnlyMuiProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Full page for browsing coding problems (SPA-017). Renders inside the shared NavShell wrapped by ClientOnlyMuiProvider. It shows filters (search with debounce, difficulty, status for logged-in users, tag), a table of problems and pagination. Filters and page are kept in the URL query. The first page comes from the server (`initialData`); later pages come from `dataSource` (the in-memory mock API in these stories).',
      },
    },
  },
  argTypes: {
    currentPath: {
      control: 'select',
      options: NAV_ROUTES,
      description: 'Route highlighted as active in the NavShell navigation bar',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '/problems' },
      },
    },
  },
  args: {
    currentPath: '/problems',
    initialData: FIRST_PAGE,
    tags: MOCK_TAGS,
    dataSource: mockProblemsService,
  },
};

export default meta;
type Story = StoryObj<typeof ProblemsPage>;

export const Default: Story = {
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story:
          'Default desktop state — first page of problems loaded on the server, with "Problems" marked as the active route. Change a filter or the page to load data from the mock API.',
      },
    },
  },
};

export const LoggedIn: Story = {
  args: {
    isAuthenticated: true,
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Logged-in user — the status filter and the status column are visible.',
      },
    },
  },
};

export const FilteredFromUrl: Story = {
  args: {
    initialQuery: parseProblemsQuery(new URLSearchParams('?difficulty=Easy&tag=math')),
    initialData: filterMockProblems(MOCK_PROBLEM_CATALOG, {
      difficulty: 'Easy',
      tag: 'math',
      pageSize: PROBLEMS_PAGE_SIZE,
    }),
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Page opened from a shared link (`?difficulty=Easy&tag=math`).',
      },
    },
  },
};

export const Loading: Story = {
  args: {
    initialData: null,
    dataSource: pendingDataSource,
  },
  parameters: {
    layout: 'fullscreen',
    docs: { description: { story: 'Loading state while the problems are requested.' } },
  },
};

export const Empty: Story = {
  args: {
    initialQuery: parseProblemsQuery(new URLSearchParams('?search=zzz')),
    initialData: filterMockProblems(MOCK_PROBLEM_CATALOG, { search: 'zzz' }),
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: { story: 'No problem matches the filters. The user can clear them.' },
    },
  },
};

export const LoadError: Story = {
  args: {
    initialData: null,
    initialError: 'Could not load the problems. The server did not answer.',
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: { story: 'The server could not load the problems. "Try again" retries.' },
    },
  },
};

export const InactiveNavigation: Story = {
  args: {
    currentPath: '/',
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story:
          'Navigation state simulated from controls — a different route ("/") is active, so the Problems item renders in its inactive state.',
      },
    },
  },
};

export const MobileViewport: Story = {
  parameters: {
    layout: 'fullscreen',
    viewport: { defaultViewport: 'mobile1' },
    docs: {
      description: {
        story:
          'Page rendered on a mobile viewport — the NavigationMenu collapses to its small-screen layout.',
      },
    },
  },
};
