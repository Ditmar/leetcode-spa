import likeIcon from './assets/icons/like.svg';
import like2Icon from './assets/icons/like2.svg';
import starIcon from './assets/icons/star.svg';
import storeIcon from './assets/icons/store.svg';

import type { StatItemData } from './StatsPanel.types';

export const TEST_STATS: Record<'total' | 'passed' | 'failed' | 'waiting', StatItemData> = {
  total: { id: 'total', label: 'N° of tests', value: 32, icon: storeIcon, color: 'primary' },
  passed: { id: 'passed', label: 'Passed', value: 12, icon: likeIcon, color: 'success' },
  failed: { id: 'failed', label: 'Failed', value: 19, icon: like2Icon, color: 'error' },
  waiting: {
    id: 'waiting',
    label: 'Waiting for result',
    value: 1,
    icon: starIcon,
    color: 'warning',
  },
};
