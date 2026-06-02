import { ContestStatus } from './ContestPage.types'; // CORREGIDO: Sin el 'type' para poder usar el Enum
import type { Contest } from './ContestPage.types';

export const TAB_LABELS = ['Live Now', 'Upcoming', 'Past'];

export const TAB_STATUS_MAP: ContestStatus[] = [
  ContestStatus.ACTIVE,
  ContestStatus.UPCOMING,
  ContestStatus.PAST,
];

export const SKELETON_COUNT = 3;

export const STATS_CONFIG = [
  { id: 'live', label: 'Live Now', count: '1', icon: 'live', color: 'success' },
  { id: 'upcoming', label: 'Upcoming', count: '3', icon: 'calendar', color: 'primary' },
  { id: 'ranking', label: 'Your Ranking', count: '1,247', icon: 'ranking', color: 'secondary' },
  { id: 'joined', label: 'Contests Joined', count: '12', icon: 'groups', color: 'action' },
];

export const MOCK_CONTESTS: Contest[] = [
  {
    id: '1',
    title: 'Weekly Contest 385',
    status: ContestStatus.ACTIVE,
    difficulty: 'Medium',
    startTime: '2026-03-05T10:30:00Z',
    duration: '90 min',
    participants: 12453,
    problemCount: 4,
    hasPrizePool: true,
  },
  {
    id: '2',
    title: 'Biweekly Contest 124',
    status: ContestStatus.UPCOMING,
    difficulty: 'Hard',
    startTime: '2026-05-20T20:00:00Z',
    duration: '90 min',
    participants: 4500,
    problemCount: 4,
    hasPrizePool: true, 
  },
  {
    id: '3',
    title: 'Beginner Sprint 01',
    status: ContestStatus.PAST,
    difficulty: 'Easy',
    startTime: '2026-01-12T16:00:00Z',
    duration: '60 min',
    participants: 23100,
    problemCount: 3,
    hasPrizePool: false, 
  },
];