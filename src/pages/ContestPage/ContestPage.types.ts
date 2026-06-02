import React from 'react';

export enum ContestStatus {
  ACTIVE = 'active',
  UPCOMING = 'upcoming',
  PAST = 'past',
}

export type ContestDifficulty = 'Easy' | 'Medium' | 'Hard';

export interface Contest {
  id: string;
  title: string;
  status: ContestStatus;              
  difficulty: ContestDifficulty;
  startTime: string;                  
  duration: string;
  participants: number;
  problemCount: number;
  hasPrizePool: boolean;              
}

export interface ContestPageProps {
  initialContests?: Contest[];
  loading?: boolean; 
}

export interface UseContestPageReturn {
  tabValue: number;
  handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
  filteredContests: Contest[];
  loading: boolean;
}