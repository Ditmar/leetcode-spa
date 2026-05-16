import type { Contest } from './ContestPage.types';

export const TAB_LABELS = ['Live Now', 'Upcoming', 'Past'];

export const MOCK_CONTESTS: Contest[] = [
  {
    id: '1',
    title: 'Weekly Contest 385',
    status: 'active',
    difficulty: 'Medium',
    startTime: 'Mar 5, 2026, 10:30 AM',
    duration: '90 min',
    participants: 12453,
    problemCount: 4,
    hasPrize: true,
  },
  {
    id: '2',
    title: 'Biweekly Contest 124',
    status: 'upcoming',
    difficulty: 'Hard',
    startTime: 'May 20, 2026, 08:00 PM',
    duration: '90 min',
    participants: 4500,
    problemCount: 4,
    hasPrize: true,
  },
  {
    id: '3',
    title: 'Beginner Sprint 01',
    status: 'past',
    difficulty: 'Easy',
    startTime: 'Jan 12, 2026, 04:00 PM',
    duration: '60 min',
    participants: 23100,
    problemCount: 3,
    hasPrize: false,
  },
];
