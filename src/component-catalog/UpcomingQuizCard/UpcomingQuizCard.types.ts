import type { CardProps } from '@mui/material';

export interface UpcomingQuizCardProps extends CardProps {
  title: string;
  date: string | Date;
  description?: string;
  onRegister: () => void;
}
