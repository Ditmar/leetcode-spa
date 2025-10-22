import { Typography, CardContent } from '@mui/material';
import React from 'react';

import { theme } from '../../style-library';

import { CalendarIcon } from './icon/CalendarIcon';
import { useUpcomingQuizCard } from './UpcomingQuizCard.hook';
import { StyledCard, DateContainer, RegisterButton } from './UpcomingQuizCard.styles';

import type { UpcomingQuizCardProps } from './UpcomingQuizCard.types';

export const UpcomingQuizCard: React.FC<UpcomingQuizCardProps> = ({
  title,
  date,
  description,
  onRegister,
  ...cardProps
}) => {
  const { formattedDate } = useUpcomingQuizCard(date);

  const getLocalDay = (dateValue: string | Date) => {
    if (typeof dateValue === 'string') {
      const [year, month, day] = dateValue.split('-').map(Number);
      return new Date(Date.UTC(year, month - 1, day)).getUTCDate();
    }
    return dateValue.getUTCDate();
  };

  const day = getLocalDay(date);

  return (
    <StyledCard {...cardProps} data-testid="quiz-card">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>

        <DateContainer>
          <CalendarIcon fontSize="large" sx={{ color: theme.palette.primary.main }} day={day} />

          <Typography variant="subtitle1" color="text.secondary" data-testid="quiz-date">
            {formattedDate}
          </Typography>
        </DateContainer>

        {description && (
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {description}
          </Typography>
        )}

        <RegisterButton variant="contained" onClick={onRegister} data-testid="register-button">
          Register Now
        </RegisterButton>
      </CardContent>
    </StyledCard>
  );
};
