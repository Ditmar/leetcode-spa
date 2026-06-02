import type { ContestStatus, ContestDifficulty } from './ContestPage.types'; // CORREGIDO: 'import type' explícito para cumplir con verbatimModuleSyntax

export const a11yProps = (index: number) => {
  return {
    id: `contest-tab-${index}`,
    'aria-controls': `contest-tabpanel-${index}`,
  };
};

export const getStatusLabel = (status: ContestStatus): string => {
  switch (status) {
    case 'active':
      return 'Live Now';
    case 'upcoming':
      return 'Upcoming';
    case 'past':
      return 'Past';
    default:
      return 'Unknown'; 
  }
};


export const getStatusChipColor = (status: ContestStatus): 'success' | 'primary' | 'default' => {
  switch (status) {
    case 'active':
      return 'success';
    case 'upcoming':
      return 'primary';
    case 'past':
      return 'default';
    default:
      return 'default'; 
  }
};

export const getDifficultyColor = (difficulty: ContestDifficulty): string => {
  switch (difficulty) {
    case 'Easy':
      return 'success.main';
    case 'Medium':
      return 'warning.main';
    case 'Hard':
      return 'error.main';
    default:
      return 'text.secondary'; 
  }
};

export const formatParticipants = (count: number): string => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`;
  }
  return count.toString();
};

export const formatDate = (isoString: string): string => {
  const date = new Date(isoString);
  
  if (isNaN(date.getTime())) {
    return 'Invalid Date';
  }

  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};